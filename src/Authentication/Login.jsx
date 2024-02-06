// Login.jsx
import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';
import { MyContext } from '../Context/MyContext';
import LoadingPage from '../Components/LoadingPage';

function Login() {
  const { handleLoginSuccess, setIsLogin, loading } = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      handleLoginSuccess();
      navigate('/products');
      setIsLogin(true);
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErrorMessage('Error logging in: ' + error.message);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <form className="login-container" onSubmit={handleLogin}>
          <h1>Login</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              required
              placeholder='imchinu17@gmail.com'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              className="input"
              required
              placeholder='Abc@123'
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
          <button type="submit" className="button">
            Login
          </button>
          <div className="additional-links">
            <Link to="/forgotpswrd">Forgot Password</Link>
            <span>|</span>
            <Link to="/signup">Sign Up</Link>
            <span>|</span>
            <a href="mailto:imchinu17@gmail.com">Contact Us</a>

          </div>
        </form>
      )}
    </>
  );
}

export default Login;
