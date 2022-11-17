// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import {Accordion} from 'react-bootstrap'
import SidebarMenu from 'react-bootstrap-sidebar-menu';

const Sidetest = () => {

    return (
        <div>
            <SidebarMenu className='p-1' style={{width: '240px'}}>
            <SidebarMenu.Toggle className='btn btn-outline-secondary'>-</SidebarMenu.Toggle>
                {/* <SidebarMenu.Header className='p-2'>
                    <SidebarMenu.Toggle className='btn btn-outline-secondary'>-</SidebarMenu.Toggle>
                </SidebarMenu.Header> */}
                <SidebarMenu.Collapse>
                    <SidebarMenu.Body>
                        <SidebarMenu.Sub>
                            <SidebarMenu.Sub.Toggle>
                                <SidebarMenu.Nav.Icon />
                                <SidebarMenu.Nav.Title>Submenu title</SidebarMenu.Nav.Title>
                            </SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Sub.Collapse>
                                <SidebarMenu.Nav>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>*</SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>Submenu item title</SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>
                        <SidebarMenu.Sub>
                            <SidebarMenu.Sub.Toggle>
                                <SidebarMenu.Nav.Icon />
                                <SidebarMenu.Nav.Title>Submenu title 2</SidebarMenu.Nav.Title>
                            </SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Sub.Collapse>
                                <SidebarMenu.Nav>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>*</SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>Submenu item title</SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>
                        <SidebarMenu.Sub>
                            <SidebarMenu.Sub.Toggle>
                                <SidebarMenu.Nav.Icon />
                                <SidebarMenu.Nav.Title>Submenu title 3</SidebarMenu.Nav.Title>
                            </SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Sub.Collapse>
                                <SidebarMenu.Nav>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>*</SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>Submenu item title</SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>
                    </SidebarMenu.Body>
                </SidebarMenu.Collapse>
            </SidebarMenu>
        </div>
    );
}

export default Sidetest;

{/* <SidebarMenu>
    <SidebarMenu.Collapse>
        <SidebarMenu.Header>
            <SidebarMenu.Brand>My Brand</SidebarMenu.Brand>
            <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
            <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>*</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Menu item title</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Sub>
                <SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Nav.Icon />
                    <SidebarMenu.Nav.Title>Submenu title</SidebarMenu.Nav.Title>
                </SidebarMenu.Sub.Toggle>
                <SidebarMenu.Sub.Collapse>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>*</SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>Submenu item title</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Sub.Collapse>
            </SidebarMenu.Sub>
        </SidebarMenu.Body>
    </SidebarMenu.Collapse>
</SidebarMenu> */}