import React from 'react'
import { useState } from 'react';
import { Button } from 'rsuite';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth,db } from '../firebase';
import {
  doc,
  serverTimestamp,
  setDoc
  }  from 'firebase/firestore';
import PaymentForm from '../Components/PaymentForm';
import axios from 'axios';

const Signup = () => {
    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const[password,setPassword]= useState();
    
   const  createUser = async (e) => {
    console.log("working");
    e.preventDefault(); 
    await createUserWithEmailAndPassword(auth,email,password)
    .then(async () =>{
        const uid = auth.currentUser?.uid;
        console.log("uid "+uid);
        let docRef = doc(db,`Users/${uid}`);
        try {
            //  await setDoc(docRef, 
            // {
            //     "name" : name,
            //     "uid ": uid,
            //     "email":email,
            //     "createdTime" : serverTimestamp()
            //     }
            //     );
            const createdTime = serverTimestamp();
                const uid  = auth.currentUser?.uid;
                const user = {
                  name,
                  uid,
                  email,
                  createdTime
                }
                axios.post("http://localhost:8000/create",user)
                .then(() => console.log('User Created....'))
                .catch((err)=>{
                  console.error(err);
                })
                alert("congratulations you successfully created your account :)");

                const Dresses = [];
                try {
                  await setDoc(await doc(db,"MyCart",uid),{Dresses:[]});
                } catch (error) {
                  console.log(error);
                }

        } catch (error) {
          console.log(error);
        }
    });
}

     

    


  function handleSetEmail(event){
    setEmail(event.target.value);
  }
  function handleSetPassword(event){
    setPassword(event.target.value);
  }

  function handleSetName(event){
    setName(event.target.value);
  }

  const image_url = 'data:image/png;base64,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';

  return (
    <div className='md:flex'>
      <div className='m-auto  col-lg-6 col-md-12 col-sm-12  p-5 border-2 bg-transparent border-b-white  flex-col'>
          <h1 className='text-6xl mb-7 text-center p-2 text-slate-400 font-semibold  font-MaShanZheng'>SIGNUP</h1>
          <img src={image_url} alt="logo" className='w-32 h-32 p-2 m-auto' />
        <form className='flex flex-col' onSubmit={createUser} >
            <label className='text-2xl mb-2'>Name</label>
            <input placeholder=' John Wick' className='p-2 rounded-md h-10 bg-gray-100' value={name} onChange={handleSetName} type="text"></input>
            <label className='text-2xl mb-2'>Email</label>
            <input placeholder=' example@sample.com' className='p-2 rounded-md h-10 bg-gray-100' value={email} onChange={handleSetEmail} type="email"></input>
            <label className='text-2xl  mb-2'>Password</label>
            <input className='p-2 rounded-md h-10 rounded-md h-10 bg-gray-100' type="password" value={password} onChange={handleSetPassword} ></input>
            <Button appearance='primary' color='red' className='mt-5  rounded-lg m-auto mt-10 h-12 w-48 text-xl' type='submit'>Create Account</Button>
        </form>
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12 h-screen  p-5 border-2 bg-transparent border-b-white shadow-md '>
        <PaymentForm />
      </div>
    </div>  
  )
}

export default Signup