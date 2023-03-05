const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async(req,res)=>{
  try{
    const {username,email,password} = req.body
    if(!username || !email ||!password){
      return res.status(400).json({msg:"All fields are required"});
    }

    const duplicate = await User.findOne({email}).lean().exec();
    if(duplicate){
      return res.status(409).json({msg:"Duplicate user"})
    }

    const hashedPassword = await bcrypt.hash(password,10)


    const userObject = {
      username,
      "password":hashedPassword,
      email
    };

    const user = await User.create(userObject);
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"5h"});

    if(user){
      res.status(201).json({
        msg:`New user ${username} created`,
        token
      })
    }else{
      res.status(400).json({msg:"Invalid user data received"});
    }

  }catch(error){
    return res.status(500).json(error)
  }
}

const loginUser = async(req,res)=>{
 
  try {
    const user = await User.findOne({email:req.body.email});
    if(!user){
     return res.status(401).json({msg:"Invalid Credentials"})
    }
    const comparePassword = await bcrypt.compare(req.body.password,user.password);
    if(!comparePassword){
      return res.status(401).json({msg:"Invalid Credentials"})
    }

    const {password,...others} =user._doc


    const token= jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'5h'})

    return res.status(200).json({user:others,token})

  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports={createUser,loginUser}