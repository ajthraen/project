import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='somePad'><Link to="/userpage" className="navLinks">Login</Link></div>
        </div>
    );
}

export default Home;
