import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faBuildingColumns} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faBuildingColumns)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

