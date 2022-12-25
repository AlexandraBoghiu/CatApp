import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './Form.css';

const LoginForm=()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin=(e : any)=>{
        e.preventDefault()
        const userLogin={"email":email, "password":password}
        console.log(userLogin)
        fetch("http://localhost:7070/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userLogin)

        }).then(async response => {
            const data = await response.text();
            if(data === 'true'){
                navigate("/users")
                localStorage.setItem('email', email)
            }
            else{
                setError('Wrong email or password!')
            }
        })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className="form-div">
            <h1>Welcome back! /ᐠ ̥  ̮  ̥ ᐟ\</h1>
            <p>Please enter your email and password</p>
            <form className="form-style" onSubmit={handleLogin}>
            <div className="form-row">
                <div className="col">
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="col">
                <input
                       type="password"
                       className="form-control"
                       name="password"
                       placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit" className="btn-submit">Login</button></div>
            <br/>
                <div className="col">
                    {error !== ''? <span className="error">{error}</span>:""}
                </div>
            </div>
            </form>
        </div>
    );
};

export default LoginForm;