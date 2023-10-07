const express=require('express');
const encryptor=require('simple-encryptor');
const bcrypt=require('bcrypt');
const router=express.Router();
const Signupdata=require('../models/modelsignup')
// const useNavigate=require('react-router-dom');

// const navigate=useNavigate();

//Login Functionality

router.post('/login', async (req, res) => {
    
        const{email,pass}=req.body;

        if(!email || !pass){
            return res.status(400).json({ error: 'Please fill in all fields.' });
        }
try{
       const user=await  Signupdata.findOne({email});
       
       console.log('User:', user);
       if(!user)
       {
        return res.status(404).json({error:'user not found'});
       }
       const passmatch=await bcrypt.compare(pass,user.pass);
       console.log('Password Match:', passmatch);

       if(!passmatch)
       {
        return res.status(401).json({error:'Invalid password'});
       }

       return res.status(200).json({message:'Login successfull'});
    }catch(err){
console.error(err);
return res.status(500).json({ error: 'Internal server error' });
    }
           
});

  module.exports=router;