import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [userType, setUserType] = useState('patient'); // State to track the active form

  // Function to toggle between Patient and Doctor form
  const handleUserType = (type) => {
    setUserType(type);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-logo">TeleMed Portal</h1>
          <p className="login-tagline">Your healthcare, anytime, anywhere</p>
        </div>

        <div className="login-toggle">
          {/* Toggle buttons for Patient and Doctor */}
          <button
            className={userType === 'patient' ? 'active' : ''}
            onClick={() => handleUserType('patient')}
          >
            Patient
          </button>
          <button
            className={userType === 'doctor' ? 'active' : ''}
            onClick={() => handleUserType('doctor')}
          >
            Doctor
          </button>
        </div>

        {/* Form Section - dynamically changes based on userType */}
        <div className="login-form-wrapper">
          {userType === 'patient' ? (
            <div className="login-form patient">
              <h2>Patient Login</h2>
              <form>
                <input type="text" placeholder="Email/Username" required />
                <input type="password" placeholder="Password" required />
                <button className="login-btn">Login</button>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </form>
            </div>
          ) : (
            <div className="login-form doctor">
              <h2>Doctor Login</h2>
              <form>
                <input type="text" placeholder="Email/Username" required />
                <input type="password" placeholder="Password" required />
                <button className="login-btn">Login</button>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </form>
            </div>
          )}
        </div>

        <footer className="login-footer">
          <a href="/register">Don't have an account? Register here</a>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
