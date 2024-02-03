// Login.jsx
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/login.css';
import {auth,firebaseConfig} from '../Firebase/firebase'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to Home component upon successful login
      navigate('/home'); // Use navigate function for navigation
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErrorMessage('Error logging in: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-group">
        <label className="label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={toggleShowPassword}
            className="checkbox"
          />
          Show Password
        </label>
      </div>
      <button onClick={handleLogin} className="button">
        Login
      </button>
      <div className="additional-links">
        <a href="#">Forgot Password</a>
        <span>|</span>
        <Link to="/signup">Sign Up</Link>
        <span>|</span>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Login;
