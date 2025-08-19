import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import theme from './theme';


const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
}); 

function App() {

    return (
        <AuthProvider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;