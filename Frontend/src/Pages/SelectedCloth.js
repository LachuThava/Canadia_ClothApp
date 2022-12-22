import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import NavbarComponent from '../Components/Navbar';
import { useState } from 'react';
import Footer from './Footer';
import { useEffect } from 'react';
import { auth } from '../firebase';
import axios from 'axios';

const SelectedCloth = () => {
  const location = useLocation();

  var measure = "";
  var[count,setCount] =useState(0);
  var uid = 0;
  useEffect(()=>{
    
  },[])


  const size = ["xs","sm","md","lg","xl","xxl"];
  var measure = "";

  const   handleMyCart = async(props) =>{
    var temp = [];
    console.log("props : : : : : ",props);
    try {
      // getting data from firebase 
      await axios.get(`http://localhost:8000/MyCartDetails/${uid}`)
      .then((res)=>{
        temp =res.data;
        console.log("res.data : ",res.data);
        // temp.push(res.data("Dresses"));
      })
    } catch (error) {
      console.log("error : : ",error);
    }
    console.log("temp : : ",temp);
    let check = false;
    console.log("props : ",props);
    
    // for(let i=0;i<temp.length;i++){
    //     if(props["id"]===temp["id"] && props["measure"]===temp["measure"] && props["dress"]===temp["dress"]){
    //       let c = 0;
    //       c = temp["count"];
    //       console.log("c : ",c);
    //       c = c+1;
    //       check= true;
    //       temp["count"] = c;
    //       break;
    //     }
    //   }

    temp.map((item) =>{
      if(props["id"]===item["id"] && props["measure"]===item["measure"] && props["dress"]===item["dress"]){
        let c = 0;
        item["count"]++;
        console.log("c : ",c);
        check= true;
        
      }
    });

      uid = await auth.currentUser?.uid;
    
      if(check===false){
        temp.push(props);
      }
      
     
      try {
        await axios.post(`http://localhost:8000/MyCart/${uid}`,temp)
        .then(()=>{alert("item added");})
        .catch((err)=>{
          console.log(err); 
        })  
      } catch (error) {
       console.log(error); 
      }
  
      check  =false;
    }


  return (
    <div className='overflow-x-hidden'>
      <NavbarComponent />
        <div className='md:flex'>
        <div className='col-lg-6 col-sm-12 col-md-6  flex items-center justify-center '>
          <img src={location.state['url']} className="" alt="" />
        </div>
        <div className='col-lg-6 col-sm-12 col-md-6 mt-10'>
          <div className='p-2 w-3/4 m-auto flex flex-col justify-center'>
            <h1 className='text-7xl  mb-5 font-MaShanZheng'>{location.state["name"]}</h1>
            <p className='font-Cabin text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis quo similique repudiandae earum in dignissimos consequuntur, aliquid voluptatem provident tenetur error praesentium laborum minima harum aliquam. Magni, quisquam aliquid!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, quia ab. Eligendi eum sapiente reiciendis veritatis omnis ipsam, odio asperiores, modi accusamus illum corrupti fugit magnam reprehenderit quibusdam molestias laborum.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo similique nisi eum? Autem quasi omnis cumque iste? Harum, eius nesciunt! Fugit minus minima nisi esse itaque qui in suscipit ipsum?
            </p>
            <div className='mt-7 mb-1'>
              <span className=" text-xl text-zinc-800"> Price : Rs. {location.state['price']}/=</span>
            </div>
            
            <div className='flex justify-center mt-16'>
              <button onClick={()=>{let i=count; if(count!==0){count--;} setCount(count)}} className='rounded-circle h-6 w-6 hover:bg-red-400 hover:duration-1000 bg-red-200'>-</button>
              <input className='bg-slate-50 mr-2 ml-2 w-7 text-center text-lg'value={count}/>
              <button onClick={()=>{let i=count; setCount(count++)}} className='rounded-circle h-6 w-6 hover:bg-red-400 hover:duration-1000 bg-red-200'>+</button>
            </div>
            <div className='flex  items-center justify-center mt-4 mb-5'>
              {
                size.map((item)=>{
                  return(
                    <button key={item} onClick={() =>{measure =item;console.log("measure : ",measure)}} className='bg-red-200  focus:bg-red-400 hover:-translate-y-1 hover:duration-500 active:shadow-sm hover:bg-red-400 p-2 active:bg-orange-600 hover:shadow-black  shadow-md rounded-circle mr-2 w-10 h-10' appearance='primary' color='red'>{item}</button>
                  )
                })
              }
            </div>
            <div className=' mt-2 flex items-center justify-center'>
              <button onClick={() => {uid = auth.currentUser?.uid;var temp ={"dress":location.state['name'],"price":location.state['price'],"measure":measure,"count":count,uid,"id":location.state["id"]};console.log("temp : ",temp);handleMyCart(temp);}} className='shadow-md hover:bg-red-400 hover:duration-1000 bg-red-200 w-1/2 h-12 p-1 rounded-md text-lg font-Cabin' color='red' appearance='primary'>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SelectedCloth