import React from 'react';
import EmergencyPrompt from './../emergency-prompt/EmergencyPrompt';
import {
    Navbar, NavbarBrand, NavbarToggler, Nav,
    NavItem, NavLink, NavbarText,
} from 'reactstrap';
import './Footer.css'

function Footer() {
    return (
        <div>
            <Navbar
                color="dark"
                container="sm"
                dark
                expand
                
            >
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink href="/components/">
                            Conatct
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            About
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    Simple Text
                </NavbarText>
            </Navbar>
        </div>
    )
}

export default Footer

/*

<div className='super-parent'>
            <EmergencyPrompt />
            <div className='parent-footer'>
                <footer className='main-footer'>
                    <ul className='ul-footer'>
                        <li>
                            <a href='#About'>About</a>
                        </li>
                        <li>
                            <a href='#Contact'>Contact</a>
                        </li>
                        <li>
                            <a href='#Directions'>Directions</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
*/