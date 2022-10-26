import React from 'react';
import { auth } from "../firebase/init"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const Page = () => {
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
        <div className='container1'>
                <button className='navLinks1' onClick={register}>Register</button>
                <button className='navLinks1' onClick={login}>Login</button>
                <button className='navLinks1' onClick={logout}>Logout</button>
        </div>
    );
}

export default Page;
