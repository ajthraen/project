import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sibebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="background">
                <button className="btnSidebar" style={{height: '40px'}} onClick={() => setOpen(!open)} aria-controls="1"aria-expanded={open}>
                    { open ? 
                        <FontAwesomeIcon style={{padding: '8px', height: '20px', color: 'white'}} icon="arrow-left" />
                        :
                        <FontAwesomeIcon style={{padding: '8px', height: '20px', color: 'white'}} icon="arrow-right" />
                    }
                </button>
            </div>
            <div className="background" style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="1">
                        <div body style={{ width: '280px' }}>
                            <div className="sidebar__section">
                                <h5>Pillar 1: Mindset and Tools</h5>
                                <Link to="/" className="sidebar__link">Keys to Training</Link>
                                <Link to="/" className="sidebar__link">Things to Remember</Link>
                                <Link to="/" className="sidebar__link">Tools for Training</Link>
                                <Link to="/" className="sidebar__link">How to Using the E-Collar</Link>
                                <Link to="/" className="sidebar__link">Command Words</Link>
                            </div>
                            <div className="sidebar__section">
                                <h5>Pillar 2: Establish Expectations</h5>
                                <Link to="/" className="sidebar__link">Find Working Level</Link>
                                <Link to="/" className="sidebar__link">Conditioning to the E-Collar</Link>
                                <Link to="/" className="sidebar__link">Intro to Place</Link>
                                <Link to="/" className="sidebar__link">Place Progression</Link>
                                <Link to="/" className="sidebar__link">Intro to Sit/Stay</Link>
                                <Link to="/" className="sidebar__link">Sit/Stay for Door Manners</Link>
                                <Link to="/" className="sidebar__link">Sit/Stay for Polite Greetings</Link>
                            </div>
                            <div className="sidebar__section">
                                <h5>Pillar 3: Provide Boundries</h5>
                                <Link to="/" className="sidebar__link">Intro to Heel</Link>
                                <Link to="/" className="sidebar__link">Heel Progression</Link>
                                <Link to="/" className="sidebar__link">Intro to Recall</Link>
                                <Link to="/" className="sidebar__link">Recall Progression</Link>
                            </div>
                            <div className="sidebar__section">
                                <h5>Pillar 4: Using What You've Learned</h5>
                                <Link to="/" className="sidebar__link">Correcting Unwanted Behaviors</Link>
                                <Link to="/" className="sidebar__link">Potty Training</Link>
                                <Link to="/" className="sidebar__link">crate Training</Link>
                                <Link to="/" className="sidebar__link">Seperation Anxiety</Link>
                                <Link to="/" className="sidebar__link">Continued Practice</Link>
                                <Link to="/" className="sidebar__link">Recap</Link>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>    
        </>
    );
}

export default Sibebar;

