import axios from 'axios';
import React, { useState } from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
export default function() 
{
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[email,setEmail]=useState('');
  const[phoneno,setPhoneno]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const list={firstname,lastname,email,phoneno,password,confirmpassword}
  const navigate=useNavigate();

  const formHolder=(event)=>
  {
    axios.post("http://localhost:8080/postsu",list)
    navigate("/details")
  }
  return (
    <div>
      <div className='img2'>
       <img src="https://www.teahub.io/photos/full/16-168325_hd-wallpapers-library-background.jpg" height="750px" width="1500px"/>
      </div>
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form onSubmit={formHolder}>

      firstname &nbsp;&nbsp;: <input type="text200" value={firstname} placeholder="firstname...." onChange={(e)=>setFirstname(e.target.value)} /><br/><br/>

      lastname  &nbsp;: <input type="text200" value={lastname} placeholder="laststname...." onChange={(e)=>setLastname(e.target.value)}/><br/><br/>

      email   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300" value={email} placeholder="email...." onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
       
      phoneno   &nbsp;: <input type="text300" value={phoneno} placeholder="phone no" onChange={(e)=>setPhoneno(e.target.value)}/><br/><br/>
       
      password  &nbsp;&nbsp;: <input type="Password400" value={password} placeholder="password...."onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      confirmpassword  &nbsp;&nbsp;: <input type="Password400"  value={confirmpassword} placeholder="confirm password...." onChange={(e)=>setConfirmpassword(e.target.value)}/><br/><br/><br/>
       
     <button type="submit" class="but2">Create Account</button>
       </form>
      </div>
    </div>
  )
}
