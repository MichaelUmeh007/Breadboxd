import registerBackground from '../../assets/registerbackground.jpg'
import AuthLayout from "../../layouts/AuthLayout";
import { RegisterContent } from './RegisterContent';
import { RegisterForm } from './RegisterForm';

export const Register = () => {
    return (
        <AuthLayout backgroundImage={registerBackground} gap={20}>
            <RegisterContent/>
            <RegisterForm/>
        </AuthLayout>
    )
}

