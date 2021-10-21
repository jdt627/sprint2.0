import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';


function App() {
  const {loginWithRedirect}= useAuth0();
  
  
  return (
    <div className="App">
      <h1>aplication</h1>
      <button onClick={()=> loginWithRedirect}>login</button>
    </div>
  );
}

export default App;

