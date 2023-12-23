// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onTokenReceived }) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  let data = JSON.stringify({
    "email": email
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://20.216.159.129:3000/api/token',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data : data
  };

  const getToken = async () => {
    try {
        const response= await axios.request(config)
        if (response.status === 200 ) {
          setToken(response.data.token);
          onTokenReceived(response.data.token);
          setError('')}
       else{setError('Invalid email');}}
       catch (error) {
        setError(error.response.data.message || 'An error occurred');
      }
    };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={getToken}>Get Token</button>
      {token && <p>Token: {token}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginForm;
