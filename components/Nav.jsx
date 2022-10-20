import React from 'react';

const Nav = () => {
    return (
        <div className='container'>
            <div className="leftBox">
                Logo
            </div>
            <div className="rightBox">
                <a className="navLinks" href="">Register</a>
                <a className="navLinks" href="">Login</a>
                <a className="navLinks" href="">Home</a>
            </div>
        </div>
    );
}

export default Nav;
