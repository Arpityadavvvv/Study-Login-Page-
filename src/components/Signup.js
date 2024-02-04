import React from "react";
import Template from "./Template";
import SignupImg from "../assets/signup.png"

const Signup = ({SetLogin}) =>
{
    return (
        <Template
           title = "join the millions learning to code with JEC Placement Cell"
           desc1 = "Build skills for today tommorow and beyond "
           decc2 = "Education to future-Proof your career"
           image = {SignupImg}
           formType = "signup"
           SetLogin = {SetLogin} 
        ></Template>
    )
 
}

export default Signup;