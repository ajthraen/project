import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Start your Training <span className="purple">Journey</span>
                    </h2>
                    <Link to="/userpage">
                        <button className="btn">Sign Up!</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;
