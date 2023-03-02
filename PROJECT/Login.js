
import axios from 'axios';
import React,{useState} from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
 
  const[password,setPassword]= useState('');
  const[email,setEmail]= useState('');
  const details={email,password}
  const navigate=useNavigate();
  
  
  const formHolder=(event)=>
  {
    
    axios.post("http://localhost:8080/postlogin",details)
    navigate("/signup")
   
    
  }
  return (
    <div>
    
    <div className='body1'>
         <img src="https://img.freepik.com/free-photo/smart-female-student-with-book-library_23-2148204324.jpg?w=1060&t=st=1677272271~exp=1677272871~hmac=7513bd22c12d084cded2b150cc0c596863bfd5000196947d973b3cceeed254f4" height="750px" width="1500px"/>
    </div>
    
    <div className='rectangle'></div>

    <div className='head1'>
      <p>Login</p>
    </div>
    <div className='form1'>
   
       
    <form onSubmit={formHolder}>
    

   email &nbsp;&nbsp; &nbsp;  &nbsp;: <input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <br/>
    
    password  &nbsp;: <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    
    <br/>
    
   <button type="submit" class="but">Login</button>
    </form>
    </div>
  
    
    
    </div>
  )
}
