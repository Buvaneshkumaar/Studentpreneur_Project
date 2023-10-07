import React, { useState, useEffect } from 'react';
import { FaHandshake } from 'react-icons/fa';
import './shownfile.css';

function FileTable() {
    const [files, setFiles] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Fetch files from the backend API
        fetch('http://localhost:8080/upload/uploadfile1')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error(error));
    }, []);

    const downloadFile = (fileId, filename) => {
        fetch(`http://localhost:8080/upload/uploadfile1/${fileId}`)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error(error));
    };

    const filteredFiles = files.filter(file =>
        file.filename.toLowerCase().startsWith(filter.toLowerCase())
    );

    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <h3 className='logo'><FaHandshake size={60} />Studentpreneur</h3>
                </div>
            </nav>
            
                <label>Filter:</label>
               
                <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
                <div className='container'>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Files</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFiles.map(file => (
                            <tr key={file._id}>
                                <td>{file.filename}</td>
                                <td>
                                    <button onClick={() => downloadFile(file._id, file.filename)}>
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FileTable;
