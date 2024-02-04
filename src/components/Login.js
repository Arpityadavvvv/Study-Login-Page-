import React from "react";
import Template from "./Template";
import loginImg from "../assets/login.png"

const Login = ({SetLogin}) => {
    return(
        
        <Template title = "welcome "
            desc1 = "Build skills for today tommorow and beyond "
            desc2 = "Education to future-Proof your career"
            image = {loginImg}
            formType = "Login"
            SetLogin = {SetLogin}
        >
            
        </Template>
    )
}

export default Login;