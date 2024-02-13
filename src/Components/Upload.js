import React, { useState } from 'react';
import './Upload.css';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please  a file to upload.");
      return;
    }

    // For demonstration purposes, we'll just use a setTimeout to simulate the upload process
    setTimeout(() => {
      setUploadedFiles([...uploadedFiles, selectedFile]);
      setSelectedFile(null); // Reset selected file after upload
      alert('File uploaded successfully!');
    }, 1000); // Simulate 1 second delay
  };

  return (
    <div className="container">
      <h2>Chatbot: Your Chatbot Name</h2>
      <form>
        <input type="text" name="name" />
      </form>

      <div className="upload-section">
        <h3>Upload Files</h3>
        <label htmlFor="file-upload">Choose a file</label>
        {/* Ensure to use 'multiple' attribute if you want to allow multiple file selection */}
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
