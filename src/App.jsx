import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Page from './pages/Page';


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route path="/page" exact render={() => <Page/>}/>
      </div>
    </Router>  
  );
}

export default App;
