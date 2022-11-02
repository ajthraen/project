import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Page from './pages/Page';
import Form from './pages/Form';

function App() {

  return (
    <Router>
      <div>
        <Nav/>
        <Route path="/page" exact render={() => <Page/>}/>
        <Route path="/form" exact render={() => <Form/>}/>
      </div>
    </Router>  
  );
}

export default App;
