import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = ({isLoggedIn, onSubmitHandler, setEmail, setPassword, register, login, logout, email, password}) => {
    return (
        <div className='container3'>
            <div className='container1'>
                <form onSubmit={onSubmitHandler}>
                    <div><label htmlFor="first_name">Email</label></div>
                    <div>        
                        <input
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div><label htmlFor="last_name">Password</label></div>
                    <div>
                        <input
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <input type="submit"/> */}
                </form>
                <button className='btn3 m-2' onClick={login}>Login</button>
                <button className='btn3 m-2' onClick={logout}>Logout</button>
                <div className='loginStatus'>You are <b>{isLoggedIn ? 'Currently' : 'Not'}</b> logged in.</div>
                {/* <div className='somePad'><Link to="/" className="navLinks">Home</Link></div> */}
            </div>
            {isLoggedIn ?
                <div className="container4">
                    <button className='btn2'>Continue...</button>
                </div>
                : 
                <div className="container4">
                    <button className='btn2' onClick={register}>Register</button>
                </div>
            }
        </div>
    );
}

export default UserPage;
