import React, { useState } from 'react';
import './Upload.css'



function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    // Here you can implement the logic to upload the file, such as using a library like Axios to make a POST request.

    // For demonstration purposes, you can just add the selected file to the uploadedFiles state.
    setUploadedFiles([...uploadedFiles, selectedFile]);
    setSelectedFile(null); // Reset selected file after upload
  };

  return (
<div className="container">
  <h2>Chatbot: Your Chatbot Name</h2>
  <h3>hello</h3>
  
  <div className="upload-section">
    <h3>Upload Files</h3>
    <label htmlFor="file-upload">Choose a file</label>
    <input id="file-upload" type="file" onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload</button>
  </div>
  <div className="uploaded-files-section">
    <h3>Uploaded Files</h3>
    <ul>
      {uploadedFiles.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </ul>
  </div>
</div>

  );
}

export default Upload;
