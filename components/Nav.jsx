import React from 'react';

const Nav = () => {
    return (
        <div className='container'>
            <div className="leftBox">
                Logo
            </div>
            <div className="rightBox">
                <div className="navLinks">Register</div>
                <div className="navLinks">Login</div>
                <div className="navLinks">Home</div>
            </div>
        </div>
    );
}

export default Nav;
