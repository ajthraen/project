import React from 'react';
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
        setLoading(false);
        console.log(user)
        if (user) {
          setUser(user)
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
      console.log('logout');
      signOut(auth);
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
                <button className='navLinks' onClick={register}>Register</button>
                <button className='navLinks' onClick={login}>Login</button>
                <button className='navLinks' onClick={logout}>Logout</button>
                <div className='userBubble'>{loading ? 'loading...' : user.email[0].toUpperCase()}</div>
            </div>
        </div>
    );
}

export default Nav;
