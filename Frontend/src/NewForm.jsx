import React, { useState } from 'react'

function NewForm() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')  
    const [message,setMessage]=useState('')


    function handelSubmit(){
        
    }
  return ( 
    <>
    <form action="" onSubmit={handelSubmit}>
    <input type="text" placeholder='Enter your Name' value={name} onChange={setName}/><br />
    <input type="email" placeholder='Enter your Email' value={email} onChange={setEmail} /><br />
    <textarea name="" id="" cols="30" rows="10" placeholder='Enter your Message' value={message} onChange={setMessage}></textarea><br />
    <button>Submit</button>

    </form> 
    
    </>
  )
}

export default NewForm