const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        email:String,
        password:{
            type:String,
            required:true
        },
    },
    {
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo",UserDetailsSchema);