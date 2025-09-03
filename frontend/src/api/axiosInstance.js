import axios from "axios";

let accessToken = null;

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://your-production-api.com" // Replace when ready
      : "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export function setAccessToken(token) {
  accessToken = token;
}

axiosInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefershing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
}

axiosInstance.interceptors.response.use(
  (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (!error.response){
        return Promise.reject(error);
      }

      const isRefershcall = originalRequest?.url?.includes('auth/refresh')

      if (error.response?.status === 401 && !originalRequest._retry && !isRefershcall) {
        if (isRefershing) {
          return new Promise(function (resolve, reject){
            failedQueue.push({resolve, reject});
          })
            .then((token) => {
              originalRequest.headers["Authorization"] = "Bearer " + token;
              return axiosInstance(originalRequest);
            })
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefershing = true;

        try {
          const res = await axiosInstance.get('/api/public/auth/refresh');
          const newToken = res.data.accessToken;

          setAccessToken(newToken);

          processQueue(null, newToken)

          originalRequest.headers["Authorization"] = "Bearer " + newToken;
          return axiosInstance(originalRequest);

        } catch(refreshErr) {

          processQueue(refreshErr, null);
          
          return Promise.reject(refreshErr);

        } finally {

          isRefershing = false;
          
        }
      }
      
      return Promise.reject(error);
    }
);

export default axiosInstance;
