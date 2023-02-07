import React from 'react';
import './FrontPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate  } from 'react-router-dom';
import Logo from "./Logo";



const FrontPage = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register")
    };
    const handleLogin = () => {
        navigate("/login")
    };

    return (
        <div>
            <Logo></Logo>
        <div className = "home">
        <div>
            <h1>Welcome to your daily dose of cat facts! ^._.^</h1>
            <p>We're glad you're here.</p>
            <img src="https://cataas.com/cat/gif" alt="cat" />
        </div>
        <br></br>
        <div className="button-container">
        <button type="button" className="btn-primary" onClick={handleRegister}>Register</button>
        <button type="button" className="btn-primary" onClick={handleLogin}>Login</button>
        </div>
        </div>
        </div>
    );
};

export default FrontPage;
