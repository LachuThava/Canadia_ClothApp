import { useState } from 'react';
import { useEffect } from 'react';
import {React}from 'react';
import {  Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import NavbarComponent from '../Components/Navbar.js'; 
import Select from 'react-select';
import axios from 'axios';
import { dressitem } from '../Pages/MyCart';
import { auth } from '../firebase.js';
import { getAuth } from 'firebase/auth';

const Dress = () => {
  const name = useParams();
  const navigate = useNavigate();

  var uid = "";
  //retrieve photos price
  const[category,setCategory] = useState([]);

  //Shirts or Trousers || Pants or Blouses
  const[type,setType] = useState((name.Category ==="Men") ? "Shirts" : (name.Category ==="Women") ? "Pants" : (name.Category ==="Children") ? "Trouser":(name.Category ==="Babies") ? "Pants":"");

  const men_list = ["Shirts","Trousers"].map( item =>({label:item,value:item}));
  const girl_list = ["Pants","Blouses"].map( item =>({label:item,value:item}));
  
  //photos, name , price
  const men_shirt = [
    {
      "id":1,
      "url":"../assets/men/shirts/1.jpg",
      "price":1500
    },
    {
      "id":2,
      "url":"../assets/men/shirts/2.jpg",
      "price":1500
    },
    {
      "id":3,
      "url":"../assets/men/shirts/3.jpg",
      "price":1500
    },
    {
      "id":4,
      "url":"../assets/men/shirts/5.jpg",
      "price":1500
    },
    {
      "id":5,
      "url":"../assets/men/shirts/5.jpg",
      "price":1500
    },
    {
      "id":6,
      "url":"../assets/men/shirts/1.jpg",
      "price":1500
    },
    {
      "id":7,
      "url":"../assets/men/shirts/7.jpg",
      "price":1500
    },
    {
      "id":8,
      "url":"../assets/men/shirts/8.jpg",
      "price":1500
    }
  ]

  const men_trouser = [
    {
      "id":1,
      "url":"../assets/men/trouser/1.jpg",
      "price":1500
    },
    {
      "id":2,
      "url":"../assets/men/trouser/2.jpg",
      "price":1500
    },
    {
      "id":3,
      "url":"../assets/men/trouser/3.jpg",
      "price":1500
    },
    {
      "id":4,
      "url":"../assets/men/trouser/5.jpg",
      "price":1500
    },
    {
      "id":5,
      "url":"../assets/men/trouser/5.jpg",
      "price":1500
    },
    {
      "id":6,
      "url":"../assets/men/trouser/1.jpg",
      "price":1500
    },
    {
      "id":7,
      "url":"../assets/men/trouser/7.jpg",
      "price":1500
    },
    {
      "id":8,
      "url":"../assets/men/trouser/8.jpg",
      "price":1500
    }
  ]

  const women_blouse = [
    {
      "id":1,
      "url":"../assets/women/Blouses/1.jpg",
      "price":1500
    },
    {
      "id":2,
      "url":"../assets/women/Blouses/2.jpg",
      "price":1500
    },
    {
      "id":3,
      "url":"../assets/women/Blouses/3.jpg",
      "price":1500
    },
    {
      "id":4,
      "url":"../assets/women/Blouses/5.jpg",
      "price":1500
    },
    {
      "id":5,
      "url":"../assets/women/Blouses/5.jpg",
      "price":1500
    },
    {
      "id":6,
      "url":"../assets/women/Blouses/1.jpg",
      "price":1500
    },
    {
      "id":7,
      "url":"../assets/women/Blouses/7.jpg",
      "price":1500
    },
    {
      "id":8,
      "url":"../assets/women/Blouses/8.jpg",
      "price":1500
    }
  ]

  const women_pants = [
    {
      "id":1,
      "url":"../assets/women/Pants/1.jpg",
      "price":1500
    },
    {
      "id":2,
      "url":"../assets/women/Pants/2.jpg",
      "price":1500
    },
    {
      "id":3,
      "url":"../assets/women/Pants/3.jpg",
      "price":1500
    },
    {
      "id":4,
      "url":"../assets/women/Pants/5.jpg",
      "price":1500
    },
    {
      "id":5,
      "url":"../assets/women/Pants/5.jpg",
      "price":1500
    },
    {
      "id":6,
      "url":"../assets/women/Pants/1.jpg",
      "price":1500
    },
    {
      "id":7,
      "url":"../assets/women/Pants/7.jpg",
      "price":1500
    },
    {
      "id":8,
      "url":"../assets/women/Pants/8.jpg",
      "price":1500
    }
  ]

  const size = ["xs","sm","md","lg","xl","xxl"];
  var measure = "";
  var id =0;

  //men_shirts , men_trousers , women_pants , women_blouses
  const[list,setList] = useState([]);

  var[temp,setTemp] = useState([]);
  
  useEffect(()=>{
    // retrieveData();
    if(name.Category==="Men"){
      setTemp(men_list);
      // setCategory((type==="Shirts") ? men_shirt : (type==="Trousers") ? men_trouser :type);
    }
    else if(name.Category === "Women"){
      // temp = girl_list;
      setTemp(girl_list);
      // setCategory((type==="Blouses") ? women_blouse : (type==="Pants") ? women_pants :type );
    }
    // const RetrieveData =async()=>{
    //   const myDocRef = await doc(db,name.Category,"Dress");
    //   const myDoc = await getDoc(myDocRef);  
    //   setCategory(myDoc.get(type));
    // }
    const RetrieveData = async ()=>{
      uid = await auth.currentUser?.uid;
      console.log("uid ::::: ",uid);
      await axios.get(`http://localhost:8000/Dress/${name.Category}`)
      .then((res)=>{
        // console.log(res.data);
        setCategory(res.data[type]);
      })
    }

    return () => {RetrieveData()}
  },[]);
  


  
const LoadData =async()=>{
  await axios.get(`http://localhost:8000/Dress/${name.Category}`)
  .then((res)=>{
    setCategory(res.data[type]);
  })
}
  



  const handleChange =(e) =>{
    console.log("e.label : :",e.label);
    setType(e.label);
    LoadData();
    // if(e.label ==="Shirts"){
    //   setCategory(men_shirt);
    // }
    // else if(e.label === "Trousers"){
    //   setCategory(men_trouser);
    // }
    // else if(e.label === "Blouses"){
    //   setCategory(women_blouse);
    // }
    // else if(e.label === "Pants"){
    //   setCategory(women_pants);
    // }

  }

  const   handleMyCart = async(props) =>{
    var temp = [];
    console.log("props : : : : : ",props);
    try {
      // getting data from firebase 
      await axios.get(`http://localhost:8000/MyCartDetails/${props.uid}`)
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
    
    temp.map((item) =>{
      if(props["id"]===item["id"] && props["measure"]===item["measure"] && props["dress"]===item["dress"]){
        let c = 0;
        item["count"]++;
        console.log("c : ",c);
        check= true;
        
      }
    });

    uid = await auth.currentUser?.uid;
    
    if(!check){
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
  

  var dress = "";
  var price = "";
  var count = 1;

  return (
    <div>
      <NavbarComponent />
      <div className='flex items-center justify-center h-36'>
        <h1 className='text-4xl font-bold text-red-400 font-MaShanZheng'>{name.Category.toUpperCase()}</h1>
      </div>
      <div className=' h-20 max-w-7xl  m-auto'>
        <div className=' w-1/4'>
            <Select onChange={handleChange} options={temp} value={type}  />
        </div>
      </div>
      <div className='flex flex-wrap max-w-7xl  m-auto justify-center items-center'>
          {category.map((item,id) =>{
            var data = {"name":item['name'],"price":item['price'],"url":item['url'],"id":id};
            
             dress = item['name'];
             price = item['price'];
             count = 1;
            return(
            <div key={id} className=' lg:w-1/3 h-auto mb-2 mt-1 -mr-0.5 h-80 flex justify-center items-center '>
                  <div  className='w-4/5 hover:duration-700 hover:-translate-y-1 hover:shadow-2xl  cursor-pointer flex flex-col items-center justify-center border-2 border-rose-200 '>
                    <span>{item.name}</span>
                    <Link className='no-underline hover:no-underline text-black' to={ `/SelectedDress`} state={data} > 
                      <img src={item.url} alt="image" className='h-full w-full ' />
                    </Link>
                    <span className=' h-12 text-xl text-center w-full font-Cabin no-underline'>Price :  {item.price}/= Rs</span>
                    <div className='flex  items-center justify-center mt-2 mb-2'>
                        {size.map((item)=>{
                            return(
                              <button key={item} onClick={() =>{measure=item;console.log("measure : ",measure)}} className='bg-red-200  focus:bg-red-400 hover:-translate-y-1 hover:duration-500 active:shadow-sm hover:bg-red-400 p-2 active:bg-orange-600 hover:shadow-black  shadow-md rounded-circle mr-2 w-10 h-10' appearance='primary' color='red'>{item}</button>
                            )})
                        }
                    </div>
                    <button onClick={() => {uid = auth.currentUser?.uid;;var temp ={"dress":item.name,"price":item.price,"measure":measure,"count":count,uid,id};console.log("temp : ",temp);handleMyCart(temp);}}  className='w-full h-16 bg-red-500 text-xl font-Cabin no-underline'>Add Cart</button>
                  </div>
            </div>
          )})
        }
      </div>
    </div>
  );
}

export default Dress;