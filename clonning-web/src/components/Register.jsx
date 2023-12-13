import ReCAPTCHA from "react-google-recaptcha";
import { FaCheckCircle, FaSmileWink } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import "./Register.css";
import { useState } from "react";
import { useEffect,useRef } from "react";
import { validEmail ,validPassword ,validUsername } from "./home-component'/regex";
import { useCallback } from "react";
const Register = () => {
  const[usernameRegister,setUsernameRegister] = useState('')
  const[emailRegister,setEmailRegister] = useState('')
  const[passwordRegister,setPasswordRegister] = useState('')
  const[rePasswordRegister,setRepasswordRegister] = useState('')
  const[usernameChecked,setUsernameChecked] = useState(false)
  const[showUsernameIcon,setShowUsernameIcon] = useState(false)
  const[emailChecked,setEmaileChecked] = useState(false)
  const[showEmailIcon,setShowEmailIcon] = useState(false)
  const[passwordChecked,setPasswordChecked] = useState(false)
  const[showPasswordIcon,setShowPasswordIcon] = useState(false)
  const[rePasswordChecked,setRePasswordChecked] = useState(false)
  const[showRePasswordIcon,setShowRePasswordIcon] = useState(false)
  const[recaptchaChecked,setRecaptchaChecked] = useState(false)

  const validateRegister = ()=>{
    return passwordChecked & usernameChecked & emailChecked & rePasswordChecked & recaptchaChecked
  }

  function handleChange(){
    if(usernameRegister != ""){
      setShowUsernameIcon(true)
      if(validUsername.test(usernameRegister)){
        setUsernameChecked(true)
      }else{
        setUsernameChecked(false)
      }
    }
    if(emailRegister != ""){
      setShowEmailIcon(true)
      if(validEmail.test(emailRegister)){
        setEmaileChecked(true)
      }else{
        setEmaileChecked(false)
      }
    }
    
    if(passwordRegister != ""  ){
      setShowPasswordIcon(true)
      if(validPassword.test(passwordRegister)){
        setPasswordChecked(true)
      }else{
        setPasswordChecked(false)
      }  
    }
    
    if(rePasswordRegister != ""){
      setShowRePasswordIcon(true)
      if(rePasswordRegister === passwordRegister){
        setRePasswordChecked(true)
      }else{
        setRePasswordChecked(false)
      }  
    } 
  }
  
  useEffect(()=>{
    handleChange()
    
  },[usernameRegister,emailRegister,passwordRegister,rePasswordRegister])

  return (    
  <section className="section register">
      <div className="text-header">
        <h2>ลงทะเบียน</h2>
        <p>REGISTRATION</p>
      </div>
      <form className="register-form">
        <div className="information-box">
          <label>Username</label>
          <input 
            type="text"             
            value={usernameRegister} 
            name="username" 
            onChange={(e)=>setUsernameRegister(e.target.value)} 
            maxLength={15} />
          {showUsernameIcon && <span>{usernameChecked? <FaCheckCircle className="check"/>:<FaCircleXmark className="cross"/>}</span> }
        </div>
        <div className="information-box">
          <label>Email</label>
          <input 
            type="text" 
            value={emailRegister} 
            onChange={(e)=>setEmailRegister(e.target.value)}
            name="email"/>
          {showEmailIcon && <span>{emailChecked? <FaCheckCircle className="check"/>:<FaCircleXmark className="cross"/>}</span> }
        </div>
        <div className="information-box">
          <label>Password</label>
          <input 
            type="text"
            value={passwordRegister}
            name="password"
            onChange={(e)=>setPasswordRegister(e.target.value)}
            maxLength={15}/>
            {showPasswordIcon && <span>{passwordChecked? <FaCheckCircle className="check"/>:<FaCircleXmark className="cross"/>}</span> }
            
        </div>
        <div className="information-box">
          <label>Re-enter Password</label>
          <input 
            type="text"
            value={rePasswordRegister}
            name="rePassword"
            onChange={(e)=>setRepasswordRegister(e.target.value)}

            maxLength={15}/>
            {showRePasswordIcon && <span>{rePasswordChecked? <FaCheckCircle className="check"/>:<FaCircleXmark className="cross"/>}</span> }
        </div>
        
      </form>
      <ReCAPTCHA  
        className="recaptcha"
        onChange={useCallback(()=>setRecaptchaChecked(true))}
        onExpired={()=>setRecaptchaChecked(false)}
        sitekey="6LfsZCEpAAAAAHarHUCkiPa9BWjwFtQEs2RmjQg9"/>
      <button className="register-btn"  disabled={!validateRegister()}>
        สมัครสมาชิก
      </button>
      <div className="guru">
          <img src="https://www.12tails-th.com/assets/img/static/obj-4.png"/>
          <h4>ติดต่อสอบถามเรื่องต่าง ๆ</h4>
      </div>
      <div className="panda">
          <img src="https://www.12tails-th.com/assets/img/static/obj-3.png"/>
      </div>
    </section>
  );
};
export default Register;
