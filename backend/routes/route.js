const express=require("express");
const router=express.Router();
const stdSignup=require("../models/modelsignup");

//Register functionality

router.post('/signupdetails',async(req,res)=>{

    try {
        // Extract data from the request body
        const {
          name,
          email,
          pan_num,
          ph_num,
          address,
          clg_id,
          clg_token,
          clg_name,
          clg_state,
          clg_city,
          reg_num,
          acc_num,
          bank_name,
          ifsc_code,
          github_id,
          pass,
        } = req.body;
    
        // Create a new student document using your Mongoose model
        const s_signup = new stdSignup({
          name,
          email,
          pan_num,
          ph_num,
          address,
          clg_id,
          clg_token,
          clg_name,
          clg_state,
          clg_city,
          reg_num,
          acc_num,
          bank_name,
          ifsc_code,
          github_id,
          pass,
        });
    
        // Save the student document to the database
        await s_signup.save();
        
  
    
        res.status(201).json({ message: 'Student data saved successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
module.exports=router;

