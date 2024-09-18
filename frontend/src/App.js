import { Link, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Regsiter from './pages/Register';
import Landing from './pages/Landing';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const TempContent = () => {

  const location = useLocation()
  const hideNavbar = ["/register", '/login', '/dashboard'];
  const shouldHideNavbar = hideNavbar.includes(location.pathname)

  return (
  <>
  { !shouldHideNavbar &&
        (<ul>
          <li> <Link to="/register">register</Link> </li>
          <li> <Link to="/login">login</Link> </li>
        </ul>)
      } 

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/register' element={<Regsiter/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Navigate to={"/"} />}/>
      </Routes>
  </>
  );


}


function App() { 
  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  return (
    <AuthProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
            <TempContent/>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>




  );
}


export default App;
