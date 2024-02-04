import React, { useState } from "react";
import toast from "react-hot-toast";
import {FaLowVision ,FaEye} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const SignupForm = ({SetLogin}) =>
{
    const [formdata ,setHandler] = useState({ firstname:"", lastname:"" ,email:"" ,password:"",newpasword:""

    })

    const [showPassword , setPassword] = useState(false);
    const [newpassword , setnewPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler (event)
    {
       setHandler(prevFormData => {
        return{
            ...prevFormData,
            [event.target.name]:event.target.value
           
        }
       })
    }

    function SignHandler (event)
    {
         event.preventDefault();
         if(formdata.password !== formdata.newpassword)
         {
            toast.error("Password Doesn't Matched ")
            return
         }
         SetLogin(true);
         toast.success("Account Created")
         const result = {
            ...FormData
         }
         navigate("/dashboard")
    }

    return(
        // Signup form making 

        <form onSubmit={SignHandler} className="flex flex-col w-full gap-y-3 mt-2 max-w-[450px] max-h-[90vh] " >

          <div className="flex gap-3 justify-center flex-row bg-black text-white  w-[170px] p-2 rounded-lg ">
            <button className="">Student </button>
            <button className=""> Instructor</button>
          </div>

        <div className="flex flex-row justify-between">
          <label>
            <p>First Name</p>

            <input type="text" required name="firstname" id="fname"  className=" rounded-md text-richblack-700 min-w-[210px] py-1" 
             placeholder="Enter First Name "
             value={formdata.firstname}
             onChange={changeHandler}
             ></input>

          </label>

          <label>
            <p>Last Name </p>

            <input type="text" required name="lastname" id="Lname" className=" rounded-md text-richblack-700 min-w-[210px] py-1" 
             placeholder="Enter Last Name "
             value={formdata.lastname}
             onChange={changeHandler}
             ></input>

          </label>
        </div>

        <label >
            <p>Email Adress</p>
            <input type="email" required name="email" id="email" className="w-full min-w-[450px]  rounded-md text-richblack-700 py-1"
            placeholder="enter your id here"
            onChange={changeHandler}
            value={formdata.email}></input>
           
        </label>

        <div className="flex flex-row justify-between">

        <label className="relative">
            <p>Create Password</p>
            <input type={showPassword ? ("text"):("password")} required name="password" id="password"   className=" rounded-md text-richblack-700  min-w-[210px] py-1" 
            value={formdata.password}></input>


            <span className="items-end absolute right-2 top-7 text-richblack-700" onClick={() => setPassword((prev)=> !prev)}>
              {showPassword ? (<FaLowVision></FaLowVision>):(<FaEye></FaEye>)}
            </span>
        </label>

        <label className="relative ">
            <p>confirm Password</p>
            <input  type={newpassword ? ("text"):("password")} required name="newpassword" id="npassword"  className=" rounded-md text-richblack-700 min-w-[210px] py-1" 
            onChange={changeHandler}
            value={formdata.newpassword}>
          
            </input>

            <span className="items-end absolute right-2 top-[29px] text-richblack-700" onClick={() => setnewPassword((prev)=> !prev)}>
              {newpassword ? (<FaLowVision></FaLowVision>):(<FaEye></FaEye>)}
            </span>
        </label>

        </div>

        <button  className="w-full min-w-[450px] bg-yellow-400 rounded-lg mt-3 py-3 text-richblack-900 font-semibold"> Create account </button>

       

        </form>
    )
}
export default SignupForm;