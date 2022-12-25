import React, {useState} from 'react';

function MessageDisplayer(props: { email: string | null}) {
    const [username, setUsername] = useState("");
    fetch("http://localhost:7070/username",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:props.email

    }).then(async response => {
        const data = await response.text();
        setUsername(data);
    })
        .catch((error) => {
            console.log(error)
        });
    return <div className = "">Hello, {username}! (=^-ω-^=)</div>;
}

export default MessageDisplayer;