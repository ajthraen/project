import React from 'react';
// import {Link} from 'react-router-dom'
import Landing from '../components/Landing';
import Highlights from '../components/Highlights';
import Featured from '../components/Featured';
import FAQ from '../components/FAQ';
import Explore from '../components/Explore';

const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <FAQ />
            <Explore />
        </>
    );
}

export default Home;
