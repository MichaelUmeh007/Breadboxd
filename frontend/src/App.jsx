
import { BrowserRouter } from "react-router-dom";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";

function App() {
  var login = false
  return (
    <BrowserRouter>
      {login? <Login/> : <Register/>}
    </BrowserRouter>
  );
}

export default App;
