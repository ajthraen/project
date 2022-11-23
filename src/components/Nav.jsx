import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from '../assets/Library.svg';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const email = props.email;
  console.log(email)

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
          {isLoggedIn ?
            <ul className="nav__links">
              <li className="nav__list">
                <Link to="/page" className="nav__link">
                  Training Center
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/userpage" className="nav__link">
                  Log Out
                </Link>
              </li>
              <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
              <li className='nav__icon'>
                <Link to="/userpage" className='nav__link'>
                  <div className='userBubble'>{email[0].toUpperCase()}</div>
                  {/* <FontAwesomeIcon icon="shopping-cart" /> */}
                </Link>
              </li>
            </ul>
            :
            <ul className="nav__links">
              <li className="nav__list">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/userpage" className="nav__link">
                  Login
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/userpage" className="btn3">
                  Register
                </Link>
              </li>
              <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </ul>
          }
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className='menu__link'>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/userpage" className='menu__link'>
                Login
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/page" className='menu__link'>
                Training Center
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
