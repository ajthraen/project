import React from 'react';
import {Link} from 'react-router-dom'
import Landing from '../components/Landing';
import Highlights from '../components/Highlights';
import Featured from '../components/Featured';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';

const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
            <div className='somePad'><Link to="/userpage" className="navLinks">Login</Link></div>
        </>
    );
}

export default Home;
