import { createContext, useState, useContext, useEffect } from "react";
import axiosInstance, { setAccessToken } from "../api/axiosInstance";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = ( accessToken ) => {
        

            try {
                setAccessToken(accessToken);
                const decoded = jwtDecode(accessToken);
                setUser({
                    username: decoded.sub,
                    roles: decoded.roles,
                })
            } catch (err) {
                console.error("Failed to decode token:", err)
                throw err;
            }
    };

    async function logout() {

        setAccessToken(null);
        setUser(null);

        try {
           const res = await axiosInstance.post('/api/public/auth/logout');
           return res.status;
        } catch(err) {
            console.error("Logout Failed:", err)
            throw err;
        }

    }

    useEffect( () => {
        async function restoreUser() {
            try {
                const res = await axiosInstance.get('/api/public/auth/refresh');
                login(res.data.accessToken);
                
            } catch (err) {
                console.error("No active session or refresh failed:", err)
                setUser(null);
                setAccessToken(null);
            } finally {
                setLoading(false);
            }
            

        }
            restoreUser();
        }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );

}


export function useAuth(){
    return useContext(AuthContext);
}