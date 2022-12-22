const express = require('express');
const cors = require('cors');
const user = require('./firebase.js');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
const FirebaseTokenGetter = require("firebase-idtoken-getter");

var admin = require("firebase-admin");
const { db } = require('./firebase.js');
const { getAuth } = require('firebase-admin/auth');

var uid ="";

app.post("/create",async (req,res)=>{
    const data = req.body;
    console.log("my uid : ",req.body.uid);
    const uid = req.body.uid; 
    var currentTime = new Date();  
    const userRef = await db.collection("Users").doc(uid);
    await userRef.set({
      name:req.body.name,
      email:req.body.email,
      createdTime:currentTime, 
      uid
    })
    res.send({msg: "User Added"});
})

app.get("/Dress/:Category",async (req,res)=>{
  var Category = req.params['Category'];
  const dressRef =await db.collection(Category).doc("Dress");
  var dresses =await (await dressRef.get()).data()
  res.send(dresses);
});

app.post("/MyCart/:uid",async(req,res)=>{
  uid = req.params['uid'];
  var temp = [];
  length = req.body.length;
  console.log("length :: ",req.body.length);
  for (let index = 0; index < length; index++) {
    const element = req.body[index];
    temp.push(element);
  }

  console.log("45 .uid : ",uid);
  const dressRef = await db.collection("MyCart").doc(uid);
    await dressRef.set({
        Dresses:temp

    })
    res.send({msg: "item is saved"});

})


app.get("/MyCartDetails/:uid",async(req,res)=>{
  console.log("58. uid === ",req.params['uid']);  
  var dresses = [];
  const dressRef =await db.collection("MyCart").doc(req.params['uid']);
  console.log("Example : ",(await dressRef.get("Dresses")).data()["Dresses"]);
  // console.log("dresses :::", dresses);
  res.send((await dressRef.get("Dresses")).data()["Dresses"]);
})




app.listen(8000,() => console.log("server connected"));


