import React, { useState } from 'react';
import './App.css';
import LoginForm from './loginForm';
import JustifyText from './JustifyText';

function App() {
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <h1>Text Justification</h1>
      <LoginForm onTokenReceived={setToken} />
      {token && <JustifyText token={token} />}
      <h3>Réalisé par Sameh Chaouch</h3>
    </div>
  );
}

export default App;
