import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Page from './pages/Page';
import Form from './pages/Form';
import Footer from './components/Footer'
import { useState } from 'react';
import { auth } from "./firebase/init"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import UserPage from './pages/UserPage';
import Home from './pages/Home'

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState("")
  const users = {email, password}

  const onSubmitHandler = (event) => {
      event.preventDefault();
      // alert(`The name you entered was: ${email}`)
      users[email, password] = {email, password}
      console.log(users.email)
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      setIsLoggedIn(true);
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  function logout() {
      signOut(auth);
      setLoading(true);
      setIsLoggedIn(false);
      setUser({});
      console.log('logout');
  }

  return (
    <Router>
      <div className='App'>
        <Nav isLoggedIn={isLoggedIn} email={email}/>
        <Route path="/" exact component={Home} />
        <Route path="/userpage" exact render={() => <UserPage register={register} login={login} logout={logout} onSubmitHandler={onSubmitHandler} setEmail={setEmail} setPassword={setPassword} isLoggedIn={isLoggedIn}/>}/>
        <Route path="/page" exact render={() => <Page/>}/>
        <Route path="/form" exact render={() => <Form/>}/>
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
