import {React} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import Dropdown, {DropdownMenuProps} from 'rsuite/Dropdown'
import {BellIcon} from "@heroicons/react/outline";
import { DropdownMenu } from 'rsuite/esm/Picker';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { dressitem } from '../Pages/MyCart';
import { doc, setDoc } from 'firebase/firestore';
import axios from 'axios';
import { useEffect } from 'react';
var uid;
const NavbarComponent = () => {


  const auth = getAuth();
  const user = auth.currentUser;



    
    const LoadUid =()=>{
      if (user !== null) {
        uid = user.uid;  
      }
      console.log("uid navbar : ",uid);
    }


  const resetMyCart = async()=>{
  console.log("Its working");
  var temp =[];
  try {
    // getting data from firebase 
    await axios.get(`http://localhost:8000/MyCartDetails`)
    .then((res)=>{
      temp = res.data.slice();
      // temp.push(res.data("Dresses"));
      // SetDresses(res.data);
    })
  } catch (error) {
    console.log("error : : ",error);
  }
  temp.length=0;
  try {
    await axios.post(`http://localhost:8000/MyCart/${uid}`,temp)
    .then(()=>{console.log("item added");})
    .catch((err)=>{
      console.log(err); 
    })  
  } catch (error) {
   console.log(error); 
  }
}

  function handleSignOut(e){
    dressitem.length =0;
    const auth = getAuth();
    signOut(auth)
    .then((res)=>{
      console.log("signout");
      window.location.href ="/";
    })
    
  }


  return (
  
    
     <Navbar collapseOnSelect  expand="lg" className='flex justify-end p-2 h-auto  border-x-slate-200 border-y-2'>
        <div className='w-1/2'>
        <Navbar.Brand >
          <span className='text-8xl  font-MaShanZheng text-red-600'>CANADIA</span>
        </Navbar.Brand>
        </div>
         <div className='flex w-1/2  justify-end items-center'>
            <Link onClick={()=>LoadUid()} to={`/MyCart/${uid}`}  state={{"uid":uid}} >
              <div className='mr-6 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
            </Link>

            <div className='cursor-pointer' onClick={handleSignOut}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>

            </div>
         </div>
              
        </Navbar> 
      
  )
}

export default NavbarComponent