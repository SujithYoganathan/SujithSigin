import React, { useState } from 'react';
import './LoginSignup.css';
 

import userIcon from '../Assets/person.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';

export const LoginSignup = () => {

    const [action, setAction] = useState("Log In");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
            <img src={userIcon} alt="User Icon" />
            <input type="text" placeholder='Name'/>                
            </div>}
            

            <div className='input'>
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder='Email Id'/>                
            </div>

            <div className='input'>
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" placeholder='Password'/>                
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Password Forgotten <span>click here</span></div>}
        
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Log In")}}>Log In</div>
        </div>
      {/* You can use the imported image variables here */}
      
    </div>
  );
};





 
      
      
