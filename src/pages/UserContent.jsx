import React from 'react';
import Sibebar from '../components/Sibebar';
import Page2 from './Page2';

const userContent = () => {
    return (
        <div className="mainContainer">
            <Sibebar/>
            <div style={{width: '2080px'}}>
                <Page2/>
            </div>
        </div>
    );
}

export default userContent;
