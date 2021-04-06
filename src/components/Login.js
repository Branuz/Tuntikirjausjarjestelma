import React, { useState } from 'react';
import "./css/Login.css"
import PropTypes from 'prop-types';
import logo from './photos/avatar.png'




async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    
    setToken(token);
  }


  return(
    <div className="loginBody">
   
  <div className="login-wrapper"> 
    <form action="" className="form" onSubmit={handleSubmit}>
      <img  src={logo} alt="kuva" />
      <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" required onChange={e => setUserName(e.target.value)}/>
        <label for="loginUser">Käyttäjätunnus</label>
      </div>
      <div className="input-group">
        <input type="password" name="loginPassword" id="loginPassword" required onChange={e => setPassword(e.target.value)}/>
        <label for="loginPassword">Salasana</label>
      </div>
      <input type="submit" value="Login" className="submit-btn"/>
      <a href="#forgot-pw" className="forgot-pw">Unohtuiko salasana?</a>
    </form>

    <div id="forgot-pw">
    <form action="" className="form">
        <a href="#" className="close">&times;</a>
        <h2>Reset Password</h2>
        <div className="input-group">
          <input type="email" name="email" id="email" required/>
          <label for="email">Email</label>
        </div>
        <input type="submit" value="Submit" className="submit-btn"/>
      </form>

    </div>
  </div>
  </div>

  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}