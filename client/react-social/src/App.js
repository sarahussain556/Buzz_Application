import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

function App() {
HEAD
  return <Register />


  // const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/username" element={<Profile />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;