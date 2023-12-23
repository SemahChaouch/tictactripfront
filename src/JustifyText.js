// JustifyText.js
import React, { useState } from 'react';
import axios from 'axios';
import './JustifyText.css'; // Import the CSS file

const JustifyText = ({ token }) => {
  const [inputText, setInputText] = useState('');
  const [justifiedText, setJustifiedText] = useState('');
  const [displayJustifiedText, setDisplayJustifiedText] = useState(false);
  const [error, setError] = useState('');

  let data = inputText;
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '20.216.159.129:3000/api/justify',
    headers: { 
      'Content-Type': 'text/plain', 
      'Authorization': 'Bearer ' + token,
    },
    data : data
  };
  const justifyText = async () => {
    try {
      const response= await axios.request(config)
      if (response.status === 200 ) {
        setJustifiedText(response.data);     
        setDisplayJustifiedText(true); 
        setError('')}
     else{
      setDisplayJustifiedText(false); 
      setError('Payment required');}}
     catch (error) {
      setError(error.response.data.message || 'An error occurred');
    }};

  


  return (
    <div className='justifyText-container'>
      <textarea
        className="text-input"
        type="text"
        placeholder="Text to justify"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className='center-button'>
      <button onClick={justifyText}>Justify Text</button>
      </div>

      {displayJustifiedText && (
        <div className="justified-text-container">
          <textarea
          className='justified-text'
            value={justifiedText}
            readOnly
          />
        </div>
      )}
      {error && <p className="error">{error}</p>}


    </div>
  );
};

export default JustifyText;
