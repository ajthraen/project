import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sibebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="btn" style={{height: '40px'}} onClick={() => setOpen(!open)} aria-controls="1"aria-expanded={open}>
                { open ? 
                    <FontAwesomeIcon style={{height: '20px'}} icon="arrow-left" />
                    :
                    <FontAwesomeIcon style={{height: '20px'}} icon="arrow-right" />
                }
            </button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="1">
                        <div body style={{ width: '230px' }}>
                            <div className="sidebar__section">
                                <h4>Course 1: Place</h4>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                            </div>
                            <div className="sidebar__section">
                                <h4>Course 2: Sit</h4>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                            </div>
                            <div className="sidebar__section">
                                <h4>Course 3: Heel</h4>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                            </div>
                            <div className="sidebar__section">
                                <h4>Course 4: Recall</h4>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                                <Link to="/" className="sidebar__link">Training Center</Link>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>    
        </>
    );
}

export default Sibebar;

