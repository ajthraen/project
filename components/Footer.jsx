import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <Link to="/">
                        <figure className='footer__logo'>
                            <img src={Logo} className='footer__logo--img' alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <a href="/" className='footer__link'>Name</a>
                        {/* <span className="footer_link no-cursor">About</span> */}
                        <Link to="/about" className='footer__link'>About</Link>
                        <Link to="/books" className='footer__link'>Books</Link>
                        <Link to="/cart" className='footer__link'>Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy;
                        2022
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
