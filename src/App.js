import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Home from "./Home";
import { useEffect, useState } from "react";





function App() {

 
const[isLoggedIn ,SetLogin] = useState(false); // yeh variable hi to btayga ki logged in hai to ky button dikhana or if nhi hai to kya button dikhana 



  return (
    <div className="bg-black w-[100vw] h-[100vh] flex flex-col">
    <Navbar isLoggedIn = {isLoggedIn} SetLogin = {SetLogin}></Navbar> {/* ye to static component hogya hai  */}

    
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/signup" element ={<Signup SetLogin={SetLogin}/>}></Route>
      <Route path="/login" element = {<Login SetLogin={SetLogin}/>}></Route>
      <Route path="/dashboard" element = {<Dashboard/>}></Route>
    </Routes>
       
    
 
    </div>
    )

}

export default App;
