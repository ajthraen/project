import React from 'react';
import Logo from '../assets/Library.svg'

const Nav = () => {
    return (
        <div className='container'>
            <div className="leftBox">
                <a href="/">
                    <img src={Logo} alt="" className="logo" />
                </a>
            </div>
            <div className="rightBox">
                <a className="navLinks" href="/">Register</a>
                <a className="navLinks" href="">Login</a>
                <a className="navLinks" href="/page">Home</a>
            </div>
        </div>
    );
}

export default Nav;
