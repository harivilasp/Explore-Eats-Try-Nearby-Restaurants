import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
const RegisterCustomer = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email} Password: ${password}`);
  };

  return (
    <div>
    <div className="form-container">
      <h2>Register as Customer</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
        
      </form>
    </div>
    <p className="form-text ml-12">
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default RegisterCustomer;
