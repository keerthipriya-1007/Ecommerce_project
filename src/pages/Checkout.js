import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';


 
const CheckoutPage = () => {
  const [qrCodeImage, setQrCodeImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  // const navigate = useNavigate();
 
  const handleQrCodeScan = (e) => {
   
    console.log('Scanning QR code...');
  };
 
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };
 
  const navigate = useNavigate();
  const handleCheckout = () => {
   
      alert("Order placed Successfully .");
      navigate("/home");
       
      
  };

  const handleCancel = () => {
    navigate("/cart");
  }
 
  return (
    <div><center>
      <h2>Secure Checkout </h2>
     
      <label>Scan QR Code:</label>
      <br></br>
      
      <img src="/assets/qr.jpg"   width={300}  height={300}/>
      <br>
      </br>
      </center>
      <label>Upload Payment File:</label>
      <input type="file" onChange={handleFileUpload} />
      {uploadedFile && <div>File uploaded: {uploadedFile.name}</div>}
      
     
      <button onClick={handleCheckout}>Proceed</button>
      <br></br>
      <br></br>
      <button onClick={handleCancel}>Cancel</button>
      
    </div>
  );
};
 
export default CheckoutPage;