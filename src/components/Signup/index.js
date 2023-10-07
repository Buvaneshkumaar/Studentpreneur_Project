import React,{} from 'react';
import {useState} from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup=()=>
{
const[dname,setName]=useState("");
const[demail,setEmail]=useState("");
const[dpan,setPan]=useState("");
const[dphone,setPhone]=useState("");
const[daddress,setAddress]=useState("");
const[dclgid,setClgid]=useState("");
const[dclgtoken,setClgtoken]=useState("");
const[dclgname,setClgname]=useState("");
const[dclgstate,setClgstate]=useState("");
const[dclgcity,setClgcity]=useState("");
const[dregnum,setRegnum]=useState("");
const[daccnum,setAccnum]=useState("");
const[dbankname,setBankname]=useState("");
const[difsccode,setIfsccode]=useState("");
const[dgithubid,setGithubid]=useState("");
const[dpass,setPass]=useState("");

const stdSignup=async(e)=>{
    e.preventDefault();
try{    
const response=await axios.post("http://localhost:8080/stdDB/signupdetails",
{
name:dname,
email:demail,
pan_num:dpan,
ph_num:dphone,
address:daddress,
clg_id:dclgid,
clg_token:dclgtoken,
clg_name:dclgname,
clg_state:dclgstate,
clg_city:dclgcity,
reg_num:dregnum,
acc_num:daccnum,
bank_name:dbankname,
ifsc_code:difsccode,
github_id:dgithubid,
pass:dpass,
});

console.log(response.data);
toast.success('Successfully registered!', {
    position: 'top-right', // You can change the position as needed
    autoClose: 3000, // Close the toast after 3000 milliseconds (adjust as needed)
    hideProgressBar: false, // Show the progress bar
    closeOnClick: true, // Close the toast on click
    pauseOnHover: true, // Pause the timer on hover
    draggable: true, // Allow dragging the toast
  });
setName("");
setEmail("");//email
setPan("");//pan
setPhone("");//ph
setAddress("");//add
setClgid("");//glid
setClgtoken("");//token
setClgname("");//clgnam
setClgstate("");//state
setClgcity("");//city
setRegnum("");//reg
setAccnum("");//accnum
setBankname("");//bank
setIfsccode("");//ifsc
setGithubid("");//git
setPass("");
}catch(err){
    console.error(err);
}
};

// const handleChange=()=>{
//     setName("");
//     setEmail("");//email
//     setPan("");//pan
//     setPhone("");//ph
//     setAddress("");//add
//     setClgid("");//glid
//     setClgname("");//clgnam
//     setClgstate("");//state
//     setClgcity("");//city
//     setRegnum("");//reg
//     setAccnum("");//accnum
//     setBankname("");//bank
//     setIfsccode("");//ifsc
//     setGithubid("");//git
//     setPass("");//pass
//     };



    return(

        <div className={styles.signup_container}>
  <div className={styles.signup_form_container}>
    <ToastContainer/>
    <div className={styles.left}>
      <h1>Welcome!</h1>
      <Link to="/login">
        <button type='button' className={styles.white_btn}>
          Sign In
        </button>
      </Link>
    </div>
    <div className={styles.right}>
      <form className={styles.form_container} onSubmit={stdSignup}>
        <h1>Create Your Account</h1>
     

                    <input 
                        type="text"
                        placeholder='Username'
                        name='name'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setName(e.target.value); // Set only the 'name' field
                        }}
                        value={dname}
                        required
                        className={styles.input}/> 
                        
                    <input 
                        type="text"
                        placeholder='Email'
                        name='email'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setEmail(e.target.value); // Set only the 'name' field
                        }}
                        value={demail}
                        required
                        className={styles.input}/> 
                    
                    <input 
                        type="text"
                        placeholder='PAN number'
                        name='pan_num'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setPan(e.target.value); // Set only the 'name' field
                        }}
                        value={dpan}
                        required
                        className={styles.input}/>

                    <input 
                        type="text"
                        placeholder='Phone Number'
                        name='ph_num'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setPhone(e.target.value); // Set only the 'name' field
                        }}
                        value={dphone}
                        required
                        className={styles.input}/>  
                   {/* <textarea  name="address" rows="4" cols="50"></textarea> */}
                   <textarea 
                   type="text"  
                        name="address"
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setAddress(e.target.value); // Set only the 'name' field
                        }}
                        value={daddress}
                        placeholder="Address"
                        rows={4} cols={40}/>
                    
                    <input 
                        type="text"
                        placeholder='College ID'
                        name='clg_id'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setClgid(e.target.value); // Set only the 'name' field
                        }}
                        value={dclgid}
                        required
                        className={styles.input}/> 

<input 
                        type="text"
                        placeholder='College Token'
                        name='clg_token'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setClgtoken(e.target.value); // Set only the 'name' field
                        }}
                        value={dclgtoken}
                        required
                        className={styles.input}/> 
                    
                    <input 
                        type="text"
                        placeholder='College Name'
                        name='clg_name'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setClgname(e.target.value); // Set only the 'name' field
                        }}
                        value={dclgname}
                        required
                        className={styles.input}/> 

                    <input 
                        type="text"
                        placeholder='College State'
                        name='clg_state'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setClgstate(e.target.value); // Set only the 'name' field
                        }}
                        value={dclgstate}
                        required
                        className={styles.input}/> 
                    
                    <input 
                        type="text"
                        placeholder='College City'
                        name='clg_city'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setClgcity(e.target.value); // Set only the 'name' field
                        }}
                        value={dclgcity}
                        required
                        className={styles.input}/>

                    <input 
                        type="text"
                        placeholder='College Register Number'
                        name='reg_num'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setRegnum(e.target.value); // Set only the 'name' field
                        }}
                        value={dregnum}
                        required
                        className={styles.input}/>

                    <input 
                        type="text"
                        placeholder='Bank Account Number'
                        name='acc_num'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setAccnum(e.target.value); // Set only the 'name' field
                        }}
                        value={daccnum}
                        required
                        className={styles.input}/>  

                    <input 
                        type="text"
                        placeholder='Bank Name'
                        name='bank_name'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setBankname(e.target.value); // Set only the 'name' field
                        }}
                        value={dbankname}
                        required
                        className={styles.input}/>

                    <input 
                        type="text"
                        placeholder='IFSC Code'
                        name='ifsc_code'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setIfsccode(e.target.value); // Set only the 'name' field
                        }}
                        value={difsccode}
                        required
                        className={styles.input}/>   

                    <input 
                        type="text"
                        placeholder='Github ID'
                        name='github_id'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setGithubid(e.target.value); // Set only the 'name' field
                        }}
                        value={dgithubid}
                        required
                        className={styles.input}/> 

                    <input 
                        type="text"
                        placeholder='Password'
                        name='pass'
                        onChange={(e) => {
                             // Clear all fields when any field changes (this may not be the desired behavior)
                            setPass(e.target.value); // Set only the 'name' field
                        }}
                        value={dpass}
                        required
                        className={styles.input}/> 

                    

                    
                    

                    <button type="submit" name="submit" className={styles.green_btn} >
                    Sign Up    
                    </button>   
                    </form>

                </div>
            </div>
        </div>
    )};

export default Signup;