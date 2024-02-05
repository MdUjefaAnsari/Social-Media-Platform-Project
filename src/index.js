const express = require('express');
const userRouter = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');
const app= express();
const mongoose = require('mongoose');
const dotenv= require("dotenv")
const cors = require('cors');

dotenv.config()
app.use(express.json())

//middleware
app.use((req,res,next)=>{
    console.log("HTTP Method - "+req.body+", URL - "+req.url);
    next();
});
app.use(cors())
app.use('/users',userRouter);
app.use('/post',postRoute)

app.get("/",(req,res)=>{
    res.send("Hello");
})
const PORT = process.env.PORT || 5000
mongoose.connect("mongodb+srv://mdujefaansari:MynxCd1Dhczf5ivt@cluster0.iqocibf.mongodb.net/")
.then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log("Server started on port no."+PORT);
    })
})
.catch((error)=>{
    console.log(error);
})
