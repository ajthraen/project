import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'

const Nav = (props) => {
    const isLoggedIn = props.isLoggedIn
  
    return (
        <div className='container'>
            <div className="leftBox">
                <a href="/">
                    <img src={Logo} alt="" className="logo" />
                </a>
            </div>
            <div className="rightBox">
                    {isLoggedIn ?
                        <Link to="/page" className="navLinks">
                           Sign Out
                        </Link>
                        :
                        <ul className='navLinkBox'>
                            <li>
                                <Link to="/userpage" className="navLinks">
                                Sign In
                                </Link>
                            </li>
                            <li>
                                <Link to="/userpage" className="navLinks">
                                Register
                                </Link>
                            </li>
                        </ul>
                    }
                {/* <button className='userBubble'>{user.email[0].toUpperCase()}</button> */}
            </div>
        </div>
    );
}

export default Nav;
