import React, { useState, useEffect, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { auth } from '../Firebase/firebase'; // Import auth from Firebase
import "../Styles/signup.css"
import { MyContext } from '../Context/MyContext';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation
const {handleSignupSuccess}=useContext(MyContext)
  useEffect(() => {
    // No need to initialize auth here, as it's already initialized in the Firebase config
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
     handleSignupSuccess()
      // Navigate to Home component upon successful signup
      navigate('/home'); // Use navigate function for navigation
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div>
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <h1 className='signup-h1'>Signup</h1>
        <div>
          <label className="signup-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="signup-input"
            required
          />
        </div>
        <div>
          <label className="signup-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="signup-input"
            required
          />
        </div>
        <div>
          <label className="signup-label">Mobile:</label>
          <input
            type="tel"
            value={mobile}
            onChange={handleMobileChange}
            className="signup-input"
            required
          />
        </div>
        <div>
          <label className="signup-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="signup-input"
            required
          />
        </div>
        <button type="submit" className="signup-button">Signup</button>
      
        <div className='goto-login'>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
