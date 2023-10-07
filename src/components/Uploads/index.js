import React, { useRef } from 'react';
import './uploadind.css';
import { FaHandshake } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function App() {
    const fileInput = useRef();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("upload", fileInput.current.files[0]);

        try {
            const response = await fetch('http://localhost:8080/upload/uploadfile', {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                // toast.success('File uploaded successfully', {
                //     position: 'top-right',
                //     autoClose: 3000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                // });
                alert("File Successfully uploaded!!!");
                navigate('/Main');
            } else {
                console.log("error occurred during upload");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <h3 className='logo'><FaHandshake size={60} />Studentpreneur</h3>
                </div>
            </nav>
            {/* <ToastContainer/> */}
            <div className='grand-page'>
                <div className='form-container'>
                    <h1>Kindly Upload your files!!!</h1>
                    <form onSubmit={onSubmit} encType="multipart/form-data">
                    <label>Enter the Domain:</label>
                        <input type="text" name='domain'/>
                        <label>Choose a file:</label>
                        <input type='file' name="fileData" ref={fileInput} />
                        <button type='submit'>Upload</button>
                    </form>
                </div>
            </div>
           
        </>
    );
}

export default App;
