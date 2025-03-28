import React, { useState } from 'react';
import "./Login.css"
// import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    // const navigate = useNavigate();

    function handleLogin() {
        fetch('http://127.0.0.1:5000/validate_login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({'username':username, 'password':password}),
        })
        .then(response => {
        if (response.authenticated) {
            setAuthenticated(true);
            setMessage("Authentication successful");
        } else {
            setAuthenticated(false);
            setMessage("Authentication failed. Incorrect username or password.");
        }
            })
        .catch(error => setMessage('Authentication failed. Incorrect username or password.'));
        }

    if (authenticated) {
    // Redirect to another page after successful authentication
        // navigate("/predict")
    }

    return (
        <div>
        <div className="loginDiv">
            <h1>Login</h1>
            <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
    </div>
        <p>{message}</p>
    </div>

    );
    };

    export default Login;