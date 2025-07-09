import { useState, useRef } from 'react';
import axios from 'axios';

function ConvertPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const dropRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await axios.post('http://localhost:8000/convert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob', 
      });

      const url = window.URL.createObjectURL(res.data);
      setDownloadUrl(url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.add('dragover');
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove('dragover');
  };

  return (
    <div className="page convert-page">
      <h1>Upload your PDF</h1>
      <div
        className="drop-zone"
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag and drop your PDF file here</p>
        <p>or</p>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
      </div>
      <button className="primary-button" onClick={handleUpload}>Upload and Convert</button>
      {downloadUrl && (
        <a href={downloadUrl} download="converted.docx" className="download-button">Download DOC</a>
      )}
    </div>
  );
}

export default ConvertPage;
