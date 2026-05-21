const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true, // to prevent duplicate email addresses
        trim:true,
        lowercase: true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user' //Everyone is a standard user by default
    }
},{timestamps:true}); //Automatically adds createdAt and updatedAt dates

module.exports=mongoose.model('User',userSchema);