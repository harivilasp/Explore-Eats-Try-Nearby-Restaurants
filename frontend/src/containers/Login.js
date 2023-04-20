import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginRegister.css'; // Import CSS file
import { signInWithAPICustomer, signInWithAPIRestaurant } from '../redux/slices/authSlice';

const Login = () => {
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPassword, setCustomerPassword] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerPassword, setOwnerPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCustomerSubmit = (event) => {
        event.preventDefault();
        dispatch(signInWithAPICustomer(customerEmail, customerPassword));
        //setIsLoggedIn(true);
        navigate('/');
    };

    const handleOwnerSubmit = (event) => {
        event.preventDefault();
        dispatch(signInWithAPIRestaurant(ownerEmail, ownerPassword));
        //setIsLoggedIn(true);
        navigate('/');
    };

    return (
        <div>
        <div className="form-container">
          <div className='login-forms-container'>
            <div className="form-wrapper">
                <h2>Customer Login</h2>
                <form onSubmit={handleCustomerSubmit} className="form">
                    <label>
                        Email:
                        <input
                            type="text"
                            value={customerEmail}
                            onChange={(event) => setCustomerEmail(event.target.value)}
                            className="input-field"
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={customerPassword}
                            onChange={(event) => setCustomerPassword(event.target.value)}
                            className="input-field"
                        />
                    </label>
                    <br />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <p className="form-text">
                Don't have an account? <Link to="/register-customer">Register here</Link>.
            </p>
            </div>
            <div className="form-wrapper">
                <h2>Restaurant Owner Login</h2>
                <form onSubmit={handleOwnerSubmit} className="form">
                    <label>
                        Email:
                        <input
                            type="text"
                            value={ownerEmail}
                            onChange={(event) => setOwnerEmail(event.target.value)}
                            className="input-field"
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={ownerPassword}
                            onChange={(event) => setOwnerPassword(event.target.value)}
                            className="input-field"
                        />
                    </label>
                    <br />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <p className="form-text">
                Don't have an account? <Link to="/register-restaurant">Register here</Link>.
            </p>
            </div>
          </div>
        </div>
        {/* <button className='submit-button'>Admin Login</button> */}
        </div>
    );
};

export default Login;