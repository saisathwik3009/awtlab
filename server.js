var express =require("express")
var firebase =require("firebase")

var app=express()


//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRolatJqWusqCAYmSfhMLfZmtqmi9elmo",
  authDomain: "awt1-4fa44.firebaseapp.com",
  databaseURL: "https://awt1-4fa44-default-rtdb.firebaseio.com",
  projectId: "awt1-4fa44",
  storageBucket: "awt1-4fa44.appspot.com",
  messagingSenderId: "610376948350",
  appId: "1:610376948350:web:c54d9497accb894455562f",
  measurementId: "G-TM8HYJ53SE"
};



firebase.initializeApp(firebaseConfig);

var doRef= firebase.database().ref("students")
app.get("/students",(req,res)=>{
    doRef.on("value",(snap)=>{
        res.send(snap.val())
    })
})

app.listen(2000,()=>{
    console.log("server Started....")
})
