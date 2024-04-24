import React, { useState } from 'react'

function Show() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');



    function handelSubmit() {
        e.preventDefault();
        axios.post("http://localhost:8080/submit",
            {
                name: name, email: email, message: message,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <form action="" method="post" onSubmit={handelSubmit}>
                <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <textarea name=""placeholder='Enter your Message' value={message} onChange={(e)=>setMessage(e.target.value)} id="" cols="30" rows="10"></textarea>
                <button>Submit</button>
                
            </form>


        </>
    )
}

export default Show