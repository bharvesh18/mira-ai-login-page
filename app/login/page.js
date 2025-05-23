"use client"
import React, { useState,useRef } from 'react'
import { BiShow } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";
{
    /*
    This is the login page of our project, it uses tailwind and normal css all the associated css is stored in parent directory by the name index.css
    */
}
const page = () => {
    const [showPassword,setShowPassword]=useState(false);
    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
  return (
    <>
    <div className='login-top-bg'></div>
    <div className='login-page'>
      <div className="login-page-main">
        <div className="login-page-main-form">
            <h2 className='text-center text-[30px] font-bold'>Login</h2>
            <label for="username" className='text-[#b8b7b7] text-[15px]'>Email ID</label>
            <input type="text" id="username"></input>
            <div className="password-label"><label for="passcode" className='text-[#b8b7b7] text-[15px] pr-[40px]'>Password</label><a href='/'>Forgot Password ?</a></div>
            <div className="password-input">
                <input type={showPassword?"text":"password"} id="passcode"></input>
                <button className='password-show-btn' onClick={handleShowPassword}>{showPassword?<GoEyeClosed/>:<BiShow/>}</button>
            </div>
            <div className="remember-me">
                <input type="checkbox" id="rem-me" name="rem-me" value="rem-me"></input>
                <label for="rem-me" className='text-[#b8b7b7] text-[17px]'>Remember Me</label>
            </div>
            <button className='log-in-form-btn'>Login</button>
            <button className='btn-sign-up btn-google'>Continue with Google</button>
        </div>
        <div className="login-page-form-image">
            <img src='/login-form-img.avif' height="100%" width="100%"></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
