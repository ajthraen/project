import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Sibebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button className="m-1" style={{height: '42px'}} onClick={() => setOpen(!open)} aria-controls="1"aria-expanded={open}>~</Button>
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

