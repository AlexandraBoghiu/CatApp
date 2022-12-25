import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate  } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register")
    };
    const handleLogin = () => {
        navigate("/login")
    };

    return (
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
    );
};

export default Home;
