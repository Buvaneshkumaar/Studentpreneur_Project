import React,{useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Stdannouncement()
{
    const[udesc,setUdesc]=useState("");
    const[uimage,setUimage]=useState(null);

    const handleImageChange=(e)=>
    {
        const file=e.target.files[0];
        console.log("Selected file:", file); 
        setUimage(file);
    };

    const handleDescChange=(e)=>
    {
        setUdesc(e.target.value); 
    };

const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append('desc',udesc);
        formData.append('img',uimage);
       
try
{
const upload= await axios.post("http://localhost:8080/announce/upload",formData);


console.log(upload.data);
toast.success('Successfully Submitted!', {
    position: 'top-right', // You can change the position as needed
    autoClose: 3000, // Close the toast after 3000 milliseconds (adjust as needed)
    hideProgressBar: false, // Show the progress bar
    closeOnClick: true, // Close the toast on click
    pauseOnHover: true, // Pause the timer on hover
    draggable: true, // Allow dragging the toast
  });
setUdesc(" ");
setUimage(null);
}catch(err){
    console.error(err);
}};
return (
    <div>
        <ToastContainer/>
      <h1>Add Announcement</h1>
      <input type="file" accept="image/*" name="img" onChange={handleImageChange} />
      <textarea
        placeholder="Description"
        value={udesc}
        name="desc"
        onChange={handleDescChange}
      ></textarea>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Stdannouncement;