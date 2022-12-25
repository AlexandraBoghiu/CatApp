import * as React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate  } from 'react-router-dom';
import {useState} from "react";

const RegisterForm=()=> {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e: any) => {
        e.preventDefault()
        const userRegister = {"email": email, "username": username, "password": password}
        fetch("http://localhost:7070/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userRegister)

        }).then(async response => {
            const data = await response.text();
            if (data === 'true') {
                navigate("/login")
                localStorage.setItem('email', email)
            } else {
                setError('Used email or username, please try again.')
            }
        })
            .catch((error) => {
                console.log(error)
            });
    }

    return (

        <div className="form-div">
            <h1>You're just a few clicks away /ᐠ｡ꞈ｡ᐟ\</h1>
            <p>Please enter your info to create an account</p>
            <form className="form-style" onSubmit={handleRegister}>
                <div className="form-row">
                    <div className="col">
                        <input type="text"
                               className="form-control"
                               name="username"
                               onChange={(e) => setUsername(e.target.value)}
                               required
                               placeholder="Username"></input>
                    </div>
                    <div className="col">
                        <input type="email"
                               className="form-control"
                               name="email"
                               onChange={(e) => setEmail(e.target.value)}
                               required
                               placeholder="Email"></input>
                    </div>
                    <div className="col">
                        <input type="password"
                               className="form-control"
                               name="password"
                               onChange={(e) => setPassword(e.target.value)}
                               required
                               placeholder="Password"></input>
                    <br/>
                    <button type="submit" className="btn-submit">Submit</button>
                </div>
                <br/>
                <div className="col">
                    {error !== ''? <span className="error">{error}</span>:""}
                </div>
                </div>
            </form>
        </div>);
};

export default RegisterForm;