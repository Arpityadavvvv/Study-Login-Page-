import React from "react";
import { useState } from "react";

import {FaLowVision ,FaEye} from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = ({SetLogin}) =>
{
  const [formdata,setFormdata] = useState({
    emailAdress:"",
    password:""

  })

  const navigate = useNavigate();

  const [passwordtype , setPassword] = useState(false);
  
  function setHandler(event) 
  {
     setFormdata(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
     })

  }
  
  function SubmitHandler (event)
  {
    event.preventDefault();
    SetLogin(true);
    toast.success("login succesull");
    navigate("/dashboard");

  }

  return(
    <form onSubmit={SubmitHandler} className="flex flex-col w-full gap-y-3 mt-6"> 
         <label className="w-full max-w-[450px]  " htmlFor="email">
         <p className="text-[0.875] leading-[1.375] "> Email
         <sup className="text-pink-200">*</sup>
         </p>
         
         <input type="email" 
          placeholder="write your email adress here"
          id="email"
          name="emailAdress"
          className=" text-richblack-700 rounded-[0.4rem] border-b-2 w-full  "
          
          value = {FormData.email}
          onChange={setHandler}></input>
          
          
          </label>

         

          <label className="w-full relative" htmlFor="password">
          <p className="text-[0.875] leading-[1.375]"> Password
          <sup className="text-pink-200">*</sup>
          </p>
          
          <input type= {passwordtype ? ("text"):("password")} // most important and easy concept for visibility 
          placeholder="password "
          name="password"
          value = {FormData.password}
          className=" text-richblack-700 rounded-[0.4rem] border-b-2 w-full "
          onChange={setHandler}
          >

         
           
          </input>
          <span  className="absolute right-3  cursor-pointer" onClick={() => setPassword((prev) => !prev)}> 
            {passwordtype ?(<FaLowVision fontSize={24} fill='#AFB2BF'></FaLowVision>):(<FaEye fontSize={24} fill='#AFB2BF'></FaEye>)}
          </span>

          <Link to="q" >
          <p className="text-blue-500 mt-1 text-xs max-w-max mx-auto ml-auto">
          Forget password
          </p> 
          </Link>
          </label>

<br></br>
          <button className="bg-yellow-50  rounded-[8px] font-medium text-richblack-700 px-[12px] py-[8px] mt-6">Signin</button>
          
     </form>
  )
}
export default LoginForm ;

// main concept 
// 1] toggling wala specially in password section 
// 2] makig whole form 