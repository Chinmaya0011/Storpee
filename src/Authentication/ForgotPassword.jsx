import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import '../Styles/ftpd.css';
import PleaseWait from '../Components/PleaseWait';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [wait, setWait] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleResetPassword = async (e) => {
    e.preventDefault(); // Prevent form submission
    setWait(true); // Show the "Please Wait" component while resetting password
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      setErrorMessage('Error sending password reset email: ' + error.message);
    } finally {
      setWait(false); // Hide the "Please Wait" component after reset attempt
    }
  };

  return (
    <div className="forgot-password-container">
      {resetEmailSent ? (
        <div>
          <p className="forgot-reset-message">Reset email sent. Please check your email inbox.</p>
          <p className="forgot-return-login">Return to <a href="/login" className="forgot-login-link">Login</a>.</p>
          {/* Button back to login */}
          <button className="forgot-back-to-login-button" onClick={() => window.location.href = '/login'}>
            Back to Login
          </button>
        </div>
      ) : (
        wait ? (
          <PleaseWait />
        ) : (
          <form className="forgot-password-form" onSubmit={handleResetPassword}>
            <h1 className="forgot-title">Forgot Password</h1>
            {errorMessage && <p className="forgot-error-message">{errorMessage}</p>}
            <div className="forgot-form-group">
              <label htmlFor="email" className="forgot-label">Write Your Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="forgot-input"
                required
                placeholder='imchinu17@gmail.com'
              />
            </div>
            <button type="submit" className="forgot-button">Reset Password</button>
          </form>
        )
      )}
    </div>
  );
}

export default ForgotPassword;
