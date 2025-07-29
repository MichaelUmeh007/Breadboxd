
import { BrowserRouter } from "react-router-dom";
import {OldLogin, Login} from "./pages/login/Login";


function App() {
  const old = false
  return (
    <BrowserRouter>
      {old ? <OldLogin/> : <Login/>}
    </BrowserRouter>
  );
}

export default App;
