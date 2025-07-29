import './LoginPage.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

function LogInPage(){

    return (
        <div className="login-wrapper">
            <h2> Login Page </h2>

            <form>
                <label>
                    <p> Username </p>
                    <input type="text" />
                </label>
                <label>
                    <p> Password </p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit"> Submit </button>
                </div>
            </form>

            <Link to="/register">
                New? Click here to register for an account!
            </Link>

        </div>
    )

    

}

export default LogInPage;
