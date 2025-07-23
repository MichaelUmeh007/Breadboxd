import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://your-production-api.com" // Replace when ready
      : "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },

});

export default axiosInstance;
