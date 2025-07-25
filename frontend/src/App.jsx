
import { BrowserRouter } from "react-router-dom";
import {OldLogin, Login} from "./pages/auth/Login";


function App() {
  const old = true
  return (
    <BrowserRouter>
      {old ? <OldLogin/> : <Login/>}
    </BrowserRouter>
  );
}

export default App;
