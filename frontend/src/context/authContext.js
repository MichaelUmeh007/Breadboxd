import { createContext, useState, useContext } from "react";
import axiosInstance, { setAccessToken } from "../api/axiosInstance";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = ( accessToken ) => {
        setAccessToken(accessToken);

        try {
            const decoded = jwtDecode(accessToken);
            setUser({
                username: decoded.sub,
                roles: decoded.roles,
            })
        } catch (err) {
            throw err;
        }

    }

    async function logout() {

        setAccessToken(null);
        setUser(null);

        try {
           const res = await axiosInstance.post('/api/public/auth/logout');
           return res.status;
        } catch(err) {
            throw err;
        }

    }

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}


export function useAuth(){
    return useContext(AuthContext);
}