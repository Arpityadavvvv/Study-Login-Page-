import React from "react";
import logo from "../assets/Logo.svg"


import { Link } from "react-router-dom";
import toast from "react-hot-toast";




const Navbar = (props) => 
{
    let isLoggedIn = props.isLoggedIn; // the variable for chehcking is it logged in or out 
    let SetLogin = props.SetLogin;

   

  return (
    <nav className=" flex flex-row justify-between w-11/12 max-w-[1160px] mx-auto py-4 text-white  ">
        <div className="flex flex-row gap-3 ">
        <Link to="/home"><img src={logo} alt="logo" width={160} height={30} loading="lazy" ></img></Link>
        </div>


        <div className="flex flex-row gap-3 ">
            <div><Link to="/home"></Link>Home</div>
            <div><Link to="/"></Link>About</div>
            <div><Link to="/"></Link>Contact</div>
        </div>

        
        <div className=" flex flex-row gap-x-4 items-center ">
        {!isLoggedIn &&

          <Link to="/login">  
          <button className="bg-richblack-800 items-center text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=> {
            SetLogin(true);
           
            }}>Log in 
          </button>
          </Link>
        }

        {!isLoggedIn &&
            <Link to="/signup">
            <button className="bg-richblack-800 items-center text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
            </Link>
        }

        {isLoggedIn &&
            <Link to="/dashboard">
            <button className="bg-richblack-800 items-center text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=> {
                SetLogin(false);
              
            }} > Dashboard </button>
            </Link>
        }
        
        {isLoggedIn &&
            <Link to="/home">
             <button className="bg-richblack-800 items-center text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {

                SetLogin(false);   // iss setlogin ke through hum login ko false krenge 
                toast.success("Logout succesfull"); 

                } }> 
             Logout</button>
            </Link>
        }
           
        </div>
    </nav>
  )
    

}

export default Navbar;