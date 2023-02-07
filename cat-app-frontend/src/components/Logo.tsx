import React from 'react';
import logo from "./maxwell-maxwell-cat.gif";
import './Logo.css';
const Logo=()=>{

    return (
        <div>
            <img src={logo} className="logo" alt="logo"/>
            <p className="logo-text">
            Cat Facts
            </p>
        </div>

    );
};

export default Logo;