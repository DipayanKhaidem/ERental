const express= require('express');
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const User= require('../models/User'); // Import the User Model

const router= express.Router();

//Register a new User

router.post('/register', async(req,res)=>{
    try{
        const {username,email,password}=req.body;

        //check if the user already exists
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'user already exists with this email'});
        }

        //hash the password securely
        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password, salt);

        //create and save the new user
        const newUser= new User({
            username,
            email,
            password:hashedPassword
        });
        await newUser.save();

        res.status(201).json({message:'User registered successfully'});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error during registration'});
    }
});

//Login an existing User

router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;

        //find the user by email
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Invalid email or password'});
        }

        //Compare the entered password with the hashed password in the DB
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid password'});
        }

        //Generate a JWT 
        const token=jwt.sign(
            {
                id:user._id, role:user.role
            },
            process.env.JWT_SECRET || 'fallback_secret_key_change_me',
            {expiresIn:'1d'} //Token expires in 1 day;
        );

        //send the token and user data back to the frontend
        res.status(200).json({
            message:'Login successful!',
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                role:user.role
            }
        });

    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error during login'});
    }
})
module.exports= router;