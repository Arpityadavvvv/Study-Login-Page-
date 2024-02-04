import React from "react";

import frameImage from "../assets/frame.png"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import {FcGoogle} from "react-icons/fc"

const Template = ({title,desc1,desc2,image,formType,SetLogin}) => {
    return(
     <div className=" max-w-[1160px] w-11/12 mx-auto gap-x-12 gap-y-0 h-[70vh] text-white flex flex-row justify-between py-12 ">
        <div className="w-11/12 max-w-[450px] ">

             <h1 className="text-richblack-500 text-[1.875rem] leading-[2.375rem] font-semibold mt-4">{title}</h1>
             <p>
                <span className="text-richblack-100">{desc1}</span>
                <br></br>
                <span className="text-blue-100 italic ">{desc2}</span>
             </p>

            {formType === "Login" ? (<LoginForm SetLogin={SetLogin}/>) : (<SignupForm SetLogin={SetLogin}/>)}  

            <div className="flex flex-row w-full gap-x-2 items-center my-4">
                <div className="h-[1px] bg-richblack-700 w-full "></div>
                <p>OR</p>
                <div className="h-[1px] bg-richblack-700 w-full"></div>
            </div>

            
            <button className="flex flex-row justify-center w-full mx-auto items-center rounded-8px font-medium border border-richblack-700 py-3 gap-x-2 mt-6 rounded-[8px] ">
                 <FcGoogle></FcGoogle>
                <p className="">Signup with google </p>
            </button>
            
            
        </div>

        <div className="relative w-11/12 max-w-[450px] ">
            <img src={frameImage}  // ye to background image hai jo dono me use horhi hai 
            alt="pattern"
            width={558}
            height={504}
            loading="lazy"></img>

            <img  className="absolute -top-4 right-4" src={image}
            alt="stuents"
            width={558}
            height={490}
            loading="lazy"></img>
        </div>

    </div>
    )
}

export default Template;