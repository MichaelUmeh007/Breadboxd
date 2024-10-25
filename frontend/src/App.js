import './App.css';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import Landing from './pages/Landing';





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
            <Landing/>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>




  );
}


export default App;
