import * as React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import MessageDisplayer from "./UserInfo";
import {useState} from "react";

const Home=()=> {

    const email = localStorage.getItem('email');
    const navigate = useNavigate();

    const handleLogout = (e: any) => {
        e.preventDefault()
        localStorage.removeItem('email')
        navigate('/')
    }
    const [fact, setFact] = useState("Your fact will appear here!");
    const [photo, setPhotoLink] = useState("https://cataas.com/cat");

    function getCatFact() {
        fetch("https://meowfacts.herokuapp.com/",{
            method:"GET",
            headers:{"Content-Type":"application/json"}

        }).then(async response => {
            const randomNumber = Math.floor(Math.random() * 1000 + 1);
            const data = await response.json();
            setFact(data.data[0]);
            setPhotoLink(`https://cataas.com/cat/gif?random=${randomNumber}`);

        })
            .catch((error) => {
                console.log(error)
            });
    }

    return(
        <div className = 'home'>
            <div>
                <ul>
                   <button type="button" className="btn-logout" onClick={handleLogout}>Logout</button>
                    <div className="name">Cat facts </div>
                </ul>
                <div >
                    <h1><MessageDisplayer email={email}/> </h1>
                </div>
                <p>Press the button to get a fun cat fact!</p>
                <button type="button" className="btn-primary" onClick={getCatFact}>Give me a cat fact!</button>
                <div>{fact && <div className="container-text">{fact}</div>}</div>
                <img src={photo} alt="cats" />
            </div>
        </div>
    )
};

export default Home;
