import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Page from './pages/Page';
import { auth } from "./firebase/init"
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  function register() {
    console.log('register')
    createUserWithEmailAndPassword(auth, 'email@gmail.com', 'password')
  }
  return (
    <Router>
      <div>
        <Nav/>
        <button onClick={register}>Register</button>
        <Route path="/page" exact render={() => <Page/>}/>
      </div>
    </Router>  
  );
}

export default App;
