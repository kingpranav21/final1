const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        name:String,
        phone:Number,
        email:String,
        password:{
            type:String,
            required:true
        },
    },
    {
        collection:"UserRegister",
    }
);

mongoose.model("UserRegister",UserDetailsSchema);