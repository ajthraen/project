import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Page from './pages/Page';
import Form from './pages/Form';
import { useState } from 'react';
import { auth } from "./firebase/init"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const users = {email, password}
  let loggedIn = null;

  const onSubmitHandler = (event) => {
      event.preventDefault();
      // alert(`The name you entered was: ${email}`)
      users[email, password] = {email, password}
      console.log(users.email)
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
            setLoading(false);
            setUser(user)
      }
    })
  }, []);
  function register() {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  function login() {
    console.log('login')
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      setUser(user);
      loggedIn = true;
      console.log(user, loggedIn)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  function logout() {
      signOut(auth);
      setLoading(true);
      setUser({});
      loggedIn = false;
      console.log('logout', loggedIn);
  }

  return (
    <Router>
      <div>
        <Nav/>
        <div className='container1'>
            <form onSubmit={onSubmitHandler}>
                <div><label htmlFor="first_name">Email</label></div>
                <div>        
                    <input
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div><label htmlFor="last_name">Password</label></div>
                <div>
                    <input
                        type="text" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit"/>
            </form>
            <button className='navLinks1' onClick={register}>Register</button>
            <button className='navLinks1' onClick={login}>Login</button>
            <button className='navLinks1' onClick={logout}>Logout</button>
        </div>
        <Route path="/page" exact render={() => <Page/>}/>
        <Route path="/form" exact render={() => <Form/>}/>
      </div>
    </Router>  
  );
}

export default App;
