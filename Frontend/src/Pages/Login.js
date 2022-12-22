import React from 'react'
import { useState } from 'react'
import { Button } from 'rsuite';
import red from '../assets/red.jpg'
import "rsuite/dist/rsuite.min.css";
import { auth } from '../firebase.js';

import {signInWithEmailAndPassword} from 'firebase/auth';



const Login = () => {
  
    const[email,setEmail] = useState("");
    const[pswd,setPswd] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault(); 
      signInWithEmailAndPassword(auth,email,pswd)
      .then((res)=>{
          console.log(res);
          window.location.href="/Home";
      }).catch((err)=>{
          console.log(err.message);
      })
  }


    const image_url = "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    return (
    <div className='row w-screen h-screen md:overflow-hidden overflow-x-hidden'>
        <div className='col-lg-6 col-md-12  col-sm-12 w-1/2 h-screen'>
            <img src={red} className=' w-full m-auto h-screen object-cover' alt="Home" />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 w-1/2 h-screen  col justify-center flex flex-col relative m-auto shadow-lg'>
             <div className='row text-center text-8xl p-2 flex items-center mb-2 h-1/3'>
                <span className='font-MaShanZheng font-bold '>CANADIA</span>
             </div>
             <div className='row h-80 w-4/5  m-auto '>
                <form onSubmit={handleSignIn} action="" className='col p-2 flex-col justify-center items-center'>
                    <div className='p-2 row flex justify-start w-3/5 m-auto '>
                        <label htmlFor="">Email</label>
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='example@gmail.com' className='border-4 shadow-sm rounded-md h-10' type="email" />
                    </div>
                    <div className='row p-2 mt-2 w-3/5 m-auto'>
                        <label htmlFor="">Password</label>
                        <input value={pswd} onChange={(e) => {setPswd(e.target.value)}} placeholder='*************' className='shadow-sm border-4 rounded-md h-10' type="password" />
                    </div>
                    <div className='row flex justify-center  w-1/2 mt-2 p-2  m-auto'>
                        <Button type='submit' color='red' appearance='primary' className='p-2 w-28 h-12'>Sign In</Button>
                    </div>
                </form>
             </div>
             <div className=' row h-1/5 w-4/5 m-auto  flex items-center'>
                <div className='col ml-24'>
                    <span>you dont have account....</span>
                </div>
                <div className='col cursor-pointer text-xl underline'>
                    <a href='/Signup'>Signup</a>
                </div>

             </div>
        </div>
    </div>
  )
}

export default Login