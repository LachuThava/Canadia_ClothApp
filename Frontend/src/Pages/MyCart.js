import React from 'react';
import NavbarComponent from '../Components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { auth, db} from '../firebase';
import { useState } from 'react';
import axios from 'axios';
import { doc, getDoc,  setDoc } from 'firebase/firestore';
import { useLocation, useParams } from 'react-router-dom';


export var dressitem =[];
const MyCart = () => {
  var total =0;
  var[totalValue,setTotalValue] = useState(0);
  
  var [Dresses,SetDresses] = useState([]);
  const location = useLocation();
  
  var temp = [];
  var uid ="";
  useEffect(()=>{
    const RetrieveData=async()=>{
      try {
        uid = auth.currentUser?.uid;
            console.log("uid , ",uid);
            // getting data from firebase 
            await axios.get(`http://localhost:8000/MyCartDetails/${uid}`)
            .then((res)=>{
              temp = res.data.slice();
              // temp.push(res.data("Dresses"));
              // SetDresses(res.data);
            })
          } catch (error) {
            console.log("error : : ",error);
          }
          temp.map((row,index)=>{
            total = row['price']*row['count']+total;
          })
          console.log("total : ",total);
          console.log("temp : ",temp);
          SetDresses(temp);
          setTotalValue(total);
          }
          if(temp.length===0){
            total = 0;
          }
      
          return () => {RetrieveData()}
    },[]);

   const LoadData = async() =>{
    const uid =location.state["uid"];
    total =0;
      try {
        // getting data from firebase 
        await axios.get(`http://localhost:8000/MyCartDetails/${uid}`)
        .then((res)=>{
          temp = res.data.slice();
          // temp.push(res.data("Dresses"));
          // SetDresses(res.data);
        })
      } catch (error) {
        console.log("error : : ",error);
      }
      temp.map((row,index)=>{
        total = row['price']*row['count']+total;
      })
      console.log("temp : ",temp);
      SetDresses(temp);
      setTotalValue(total);
    }

    async function HandleRemove(props){
      const uid = auth.currentUser?.uid;
        const docRef = await doc(db,"MyCart",uid);
        console.log("temp : : ",temp);
        var tempId={};
       Dresses.splice(props,1);
        await setDoc(docRef,{Dresses}).then(()=>{
          console.log("Deleted ....");
          LoadData();
        });
      }

  return (
    <div>
        <NavbarComponent />
        <div className=' flex justify-center items-center h-36 text-center'>
            <h1 className='text-gray-500 text-4xl font-MaShanZheng'>My Cart</h1>
        </div>
            <div className='m-auto w-3/4 flex justify-center bg-blue-400 '>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow className=''>
                            <TableCell  align="center">Id</TableCell>
                            <TableCell  align="center">Name</TableCell>
                            <TableCell  align="center">count</TableCell>
                            <TableCell  align="center">price</TableCell>
                            <TableCell  align="center">size</TableCell>
                            <TableCell  align="center">Total</TableCell>
                            <TableCell  align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {Dresses.map((row,index) => (
                            
                            <TableRow
                            key={row['dress']}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            
                                <TableCell align="center">{index+1}</TableCell>
                                <TableCell align="center">{row['dress']}</TableCell>
                                <TableCell align="center">{row['count']}</TableCell>
                                <TableCell align="center">{row['price']}</TableCell>
                                <TableCell align="center">{row['measure']}</TableCell>
                                <TableCell align="center">{row['price']*row['count']}</TableCell>
                                <TableCell align='center'><button onClick={() =>{HandleRemove(index)}} className='p-1 bg-red-200 hover:duration-500 text-md rounded-md hover:bg-red-600 w-20 h-10'>Delete</button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </div>   
            <div className='m-auto justify-end  w-3/4 h-10 items-center text-2xl flex '>
              <span className='font-semibold'>Total : Rs. {totalValue} /=</span>
            </div>
            
            <div className='m-auto justify-end h-28  w-3/4 h-10 items-center text-2xl flex transition '>
              <button  onClick={() =>{if(Dresses.length===0){alert("Select Your Item !!!!!")}else{alert("Congratulations your order has been approved")}}} className='w-44 bg-red-400 hover:duration-500 hover:bg-red-500 font-Cabin rounded-md h-12 hover:-translate-y-1'>Pay Now</button>
            </div>
        
    </div>
  )
}

export default MyCart