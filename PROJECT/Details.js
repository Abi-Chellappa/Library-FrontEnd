import axios from 'axios';
import React, { useState } from 'react'
import './Details.css';

export default function () 
{
  const[bookname,setBookname]=useState('');
  const[bookno,setBookno]=useState('');
  const[booktype,setBooktype]=useState('');
  const[author,setAuthor]=useState('');
  const[publisher,setPublisher]=useState('');
  const[borrower,setBorrower]=useState('');
  const[borrowdate,setBorrowdate]=useState('');
  const[returndate,setReturndate]=useState('');
  const store={bookname,bookno,booktype,author,publisher,borrower,borrowdate,returndate}

  const formHolder=(event)=>
  {
    axios.post("http://localhost:8080/postenglish",store)
  }

  return (
    <div>
      <div className='img3'>
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80" height="1450px" width="1500px"/>
      </div>
      <div className='rectangle3'></div>
      <div className='head3'>
      <h>Book Details</h>
      </div>
      <div className='form3'>
     <form onSubmit={formHolder}>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    <label>bookname   &nbsp;: <input type="text4" value={bookname} placeholder="book name...." onChange={(e)=>setBookname(e.target.value)} /></label><br/><br/>
      
    
     <label for="fname">bookno
     <input type="text4" id="fname" value={bookno} name="firstname" placeholder="book no...." onChange={(e)=>setBookno(e.target.value)}/></label><br/><br/>

     <label for="fname">booktype
    <input type="text4" id="fname" value={booktype} name="firstname" placeholder="book type...." onChange={(e)=>setBooktype(e.target.value)}/></label><br/><br/>

    <label for="lname">author
    <input type="text4" id="lname" value={author} name="lastname" placeholder="author...." onChange={(e)=>setAuthor(e.target.value)}/></label><br/><br/>
    
    <label for="lname">publisher
    <input type="text4" id="lname" value={publisher} name="lastname" placeholder="publisher...." onChange={(e)=>setPublisher(e.target.value)}/></label><br/><br/>
    
    <label for="lname">borrower
    <input type="text4" id="lname" value={borrower} name="lastname" placeholder="borrower...." onChange={(e)=>setBorrower(e.target.value)}/></label><br/><br/>
    
    <label for="lname">borrowdate
    <input type="text4" id="lname" value={borrowdate} name="lastname" placeholder="borro date...." onChange={(e)=>setBorrowdate(e.target.value)}/></label><br/><br/>
    
    <label for="lname">returndate
    <input type="text4" id="lname" value={returndate} name="lastname" placeholder="return date...." onChange={(e)=>setReturndate(e.target.value)}/></label><br/><br/>
    <br/>
    
    <label>
    <input type="submit" value="Submit"></input></label>
    </form>
      </div>
      
    </div>
  )
}
