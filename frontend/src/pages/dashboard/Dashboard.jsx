import { useAuth } from "../../context/authContext"
export const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            Welcome to your dashboard
            <ul>
                <li>Username: {user.username}</li>
                <li>Role: {user.roles}</li>
            </ul>
        </div>

    )
}