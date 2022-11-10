import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = ({isLoggedIn, onSubmitHandler, setEmail, setPassword, register, login, logout, email, password}) => {
    return (
        <div>
            <div className='container1'>
                <form onSubmit={onSubmitHandler}>
                    <div><label htmlFor="first_name">Email</label></div>
                    <div>        
                        <input
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div><label htmlFor="last_name">Password</label></div>
                    <div>
                        <input
                            type="text" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <input type="submit"/> */}
                </form>
                <button className='navLinks1' onClick={register}>Register</button>
                <button className='navLinks1' onClick={login}>Login</button>
                <button className='navLinks1' onClick={logout}>Logout</button>
                <div className='loginStatus'>You are <b>{isLoggedIn ? 'Currently' : 'Not'}</b> logged in.</div>
                {/* <div className='somePad'><Link to="/" className="navLinks">Home</Link></div> */}
            </div>
        </div>
    );
}

export default UserPage;
