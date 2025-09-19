import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import Loading from "../misc/Loading";

export function RequireAuth(){
    const { user, loading } = useAuth();
    
    if (loading) return (<Loading/>);

    if (!user) return (<Navigate to="/login" replace/>);

    return <Outlet/>
}