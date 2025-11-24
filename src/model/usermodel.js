const mongoose = require("mongoose");

const Userschema  = new mongoose.Schema(
    {
    firstName:{ type:String,required:true,trim:true},
    lastName:{ type:String,required:true,trim:true},
    emailId:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},


},
{timestamps :true}

) 
const User = mongoose.model("user",Userschema);
module.exports = User;