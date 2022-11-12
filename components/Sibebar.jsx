import React from 'react';
import { Link } from 'react-router-dom';

const Sibebar = () => {
    return (
        <div className='sidebar'>
            <Link to="/page" className="sidebar__title">Training Center</Link>
            <div className="sidebar__section">
                <h4>Course 1</h4>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
            </div>
            <div className="sidebar__section">
                <h4>Course 2</h4>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
            </div>
            <div className="sidebar__section">
                <h4>Course 3</h4>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
            </div>
            <div className="sidebar__section">
                <h4>Course 4</h4>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
                <Link to="/page" className="sidebar__link">Training Center</Link>
            </div>
        </div>
    );
}

export default Sibebar;
