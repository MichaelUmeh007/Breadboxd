import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { RequireAuth } from "./components/auth/RequireAuth";
import NotFound from "./components/misc/NotFound";
import theme from './theme';
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AuthProvider } from "./context/authContext";

function App() {

    return (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />

                    <Route element={<RequireAuth />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </AuthProvider>


    );
}

export default App;