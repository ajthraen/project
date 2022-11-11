import React from 'react';
import Sibebar from '../components/Sibebar';

const Page = () => {
    return (
        <div className="mainContainer">
            <Sibebar />
            <div className='pageContainer'>
                This is a big page
            </div>
        </div>
    );
}

export default Page;
