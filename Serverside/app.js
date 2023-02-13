const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
app.use(express.json());

const cors = require("cors");
app.use(cors());


const mongoUrl = "mongodb://localhost:27017/endterm";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
})
.then(()=>{
    console.log("Connected to database");
})
.catch((e)=>console.log(e));

require("./userDetail");
const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const {email,password} = req.body;
    
    const encryptedPass = await bcrypt.hash(password,10);

    try{
        await User.create({
            email,
            password:encryptedPass,
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error"});
    }
});

require("./registerDetails");
const UserR = mongoose.model("UserRegister");
app.post("/signin",async(req,res)=>{
    const {name,phone,email,password} = req.body;
    
    const encryptedPass = await bcrypt.hash(password,10);

    try{
        await UserR.create({
            name,
            phone,
            email,
            password:encryptedPass,
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error"});
    }
});

app.listen(5000,()=>{
    console.log("Server started");
})