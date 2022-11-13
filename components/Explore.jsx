import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container p-4">
                <div className='d-flex flex-direction-column align-item-center'>
                    <div>
                        <h2>Start your Training <span className="purple">Journey</span></h2>
                    </div>
                    <div className='m-3'>
                        <Link to="/userpage"><button className="btn2">Sign Up!</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;
