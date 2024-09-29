const express=require('express');
const dotenv=require("dotenv");
const {chats}=require("./data/data");
const connectDB=require("./config/db");
dotenv.config();
const app=express();
connectDB();
app.get("/",(req,res)=>{
    res.send("Api is running");
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})
app.get("/api/chat/:id",(req,res)=>{
    let data=chats.find((item)=>item._id===req.params.id);
    res.send(data);
})
const port=process.env.PORT||4000

app.listen(port,console.log(`server started on port ${port}`))