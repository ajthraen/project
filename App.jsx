import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Page from './pages/Page';
import { auth } from "./firebase/init"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function App() {
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
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <Router>
      <div>
        <Nav/>
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <Route path="/page" exact render={() => <Page/>}/>
      </div>
    </Router>  
  );
}

export default App;
