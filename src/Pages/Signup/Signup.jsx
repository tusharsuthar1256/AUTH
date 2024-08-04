import React, { useContext, useState } from 'react';
import './Signup.css';
import { AuthContext } from '../../COntext/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { account, ID } from '../../Appwrite/config';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      signup(email, password, username);
      // await account.create(ID.unique(), email, password, username);
      console.log('User created successfully');
      navigate('/login'); // Navigate to login page or home after successful signup
    } catch (error) {
      console.error('Signup failed:', error.message);
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            required 
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
