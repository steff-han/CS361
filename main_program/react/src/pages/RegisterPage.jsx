import { Link } from "react-router-dom";

import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function RegisterPage(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Maybe use Axios to retrieve a user? 

    // Function to send a response back to MongoDB with new user credentials 
    const addUser = async () => {
        const newUser = {username, password};
        const response = await fetch(
            '/users', {
                method: 'POST', 
                headers: {'Content-type': 'application/json'}, 
                body: JSON.stringify(newUser)
            }
        );

        if (response.status === 201){
            alert("Successfully registered!");
        } else {
            alert("Failed to register, status code = " + response.status);
        }

        navigate('/login');
    }

    return (
        <div>
            <h2> Register Page </h2>

            <form>
                <label>
                    <p> Username </p>
                    <input type="text"
                           placeholder="Username"
                           value={username}
                           onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p> Password </p>
                    <input type="password"
                           placeholder="Password"
                           value={password}
                           onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button onClick={addUser}> Submit </button>
                </div>
            </form>

            <Link to="/login">
                Already have an account? Click here to login!
            </Link>

        </div>
    )
    
}

export default RegisterPage;