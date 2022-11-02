import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'
import { auth } from "../firebase/init"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const Nav = () => {
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          console.log(user)
          if (user) {
              setLoading(false);
              setUser(user)
              console.log('if')
        }
      })
    }, []);
    function register() {
      createUserWithEmailAndPassword(auth, 'a@gmail.com', 'password123')
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    function login() {
      console.log('login')
      signInWithEmailAndPassword(auth, 'a@gmail.com', 'password123' )
      .then(({user}) => {
        console.log(user)
        setUser(user);
      })
      .catch((error) => {
        console.log(error)
      })
    }
    function logout() {
        signOut(auth);
        setLoading(true);
        console.log('logout');
        setUser({});
    }

    return (
        <div className='container'>
            <div className="leftBox">
                <a href="/">
                    <img src={Logo} alt="" className="logo" />
                </a>
            </div>
            <div className="rightBox">
                {/* <button className='navLinks' onClick={register}>Register</button>
                <button className='navLinks' onClick={login}>Login</button>
                <button className='navLinks' onClick={logout}>Logout</button> */}
                <ul className='navLinkBox'>
                    <li>
                        <Link to="/page" className="navLinks">
                        Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="/page" className="navLinks">
                        Register
                        </Link>
                    </li>
                </ul>
                <button className='userBubble'>{loading ? '.' : user.email[0].toUpperCase()}</button>
            </div>
        </div>
    );
}

export default Nav;
