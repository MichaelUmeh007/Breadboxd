import loginBackground from '../../assets/loginbackground.jpg'
import { LoginContent } from "./LoginContent";
import { LoginForm } from "./LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

export const Login = () => {
    return (
        <AuthLayout backgroundImage={loginBackground}>
          <LoginContent/>
          <LoginForm/>
        </AuthLayout>
    )
}

