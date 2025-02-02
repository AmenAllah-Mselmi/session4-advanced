const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const person=require('./route/person_route');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/person',person)
app.use(cors({
    origin:["http://issatsouse.com","facebook.com"],
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:["Content-Type"]
}))
mongoose.connect("mongodb://localhost:27017/session")
.then(()=>{
console.log("connected to database suceeded");
})
.catch(()=>{
console.log("connected to database failed");
})
const port=3000;
app.listen(port,()=>{
    console.log("server is running on port 3000");
})