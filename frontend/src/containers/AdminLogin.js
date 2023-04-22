import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginRegister.css'; // Import CSS file
import { signInWithAPIAdmin } from '../redux/slices/authSlice';

function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signInWithAPIAdmin(email, password));
        //setIsLoggedIn(true);
        navigate('/');
    };

  return (
    <div className="form-container">
      <div className='login-forms-container'>
            <div className="form-wrapper">
                <h2>Admin Login - ONLY FOR ADMINISTRATIVE PURPOSES</h2>
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
                
            </div>
    </div>
    </div>
  )
}

export default AdminLogin
