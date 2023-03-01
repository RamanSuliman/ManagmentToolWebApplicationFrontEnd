//Import hook function to manage the state of a variable.
import React, { useState } from 'react';
import axios from 'axios';

// Defines the LoginPage component as a functional component.
export const LoginPage = () =>
{
    // Uses useState to define a state called password and function setPassword.
    // The function is used to update the password with initial state of empty.
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    // Function takes event object as input which is used to prevent the default form submission behaviour.
    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/ManagmentToolApplication/reactLogin',
                data: {
                    password: password,
                    email: email
                }
            });

            if (response.data.success) {
                setError("Logged in");
            } else {
                setError(response.data.message);
            }
        }catch (error){
            setError("An error occurred while logging in...");
        }
    }
    const handleLogout = (event) => {
        setLoggedIn(false);
    }
    if(isLoggedIn){
        return(
            <div>
                <h1>Welcome {email}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    //This defines the UI that will be rendered by the component.
    // Value attribute is set to password state.
    // onChange triggers a function on update which is setPassword.
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="email" value={email} onChange={handleUsernameChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                </label>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

