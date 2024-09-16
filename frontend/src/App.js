import { Link, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Regsiter from './pages/Register';
import Landing from './pages/Landing';




function App() { 

  const location = useLocation()
  const hideNavbar = ["/register"];
  const shouldHideNavbar = hideNavbar.includes(location.pathname)
  return (
    <>
      { !shouldHideNavbar &&
        (<ul>
          <li> <Link to="/register">register</Link> </li>
        </ul>)
      } 

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/register' element={<Regsiter/>}/>
        <Route path='*' element={<Navigate to={"/"} />}/>
      </Routes>
  </>
  );
}


export default App;
