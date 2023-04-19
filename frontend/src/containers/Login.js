import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import '../styles/LoginRegister.css'; // Import CSS file
import { signInWithAPI } from '../redux/slices/authSlice';

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Login auth
      dispatch(signInWithAPI(email, password))


      console.log(`Email: ${email} Password: ${password}`);
      setIsLoggedIn(true);
      navigate('/')
    };
  
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <p className="form-text">
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>
    );
  };

export default Login;
