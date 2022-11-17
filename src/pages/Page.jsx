import React from 'react';
// import Sidetest from '../components/Sidetest';
import Sibebar from '../components/Sibebar';

const Page = () => {
    return (
        <div className="mainContainer">
            {/* <Sidetest /> */}
            <Sibebar/>
            <div className='pageContainer'>
                This is a big page
            </div>
        </div>
    );
}

export default Page;
