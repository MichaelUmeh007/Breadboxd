import './App.css';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import Landing from './pages/Landing';
import Login from './pages/Login'
import Register from './pages/Register'




function App() { 
  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  return (
    <AuthProvider store={store}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path='/'/>
              <Route index element={<Landing/>}/>
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
              <Route path="*" element={<Landing />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>




  );
}


export default App;
