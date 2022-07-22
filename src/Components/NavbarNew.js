import React from 'react'
import './NavbarNew.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './drop-down/DropDown';
import {
    Navbar, Nav, NavbarBrand, NavItem, NavLink,Collapse, 
    NavbarToggler, UncontrolledDropdown, DropdownToggle, NavbarText,
} from 'reactstrap'

function NavbarNew(props) {
    const {changeMain} = props;
    return (
        <div >
            <Navbar color="dark" dark expand="md" fixed="fix" container="md">
                <img className="nasa-icon" src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nav bar logo'></img>
                <NavbarBrand href="/">
                    Nasa
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar justified>
                        <NavItem>
                            <NavLink href="/components/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle caret nav>
                                Dates📅
                            </DropdownToggle>

                            <DropDown changeMain={changeMain}/>

                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarNew

/*
    <div className='nav-logo-container'>
        <img className="icon" src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nav bar logo'></img>
    </div>
    <div className='search-bar-container'>
        <form className='search-bar-form'>
            <input className='search-bar' placeholder='search'></input>
        </form>
    </div>
    <div className='menu-container'>
        <ul className='menu-ul'>
            <li>
                <a className='home' href='#Home'>Home</a>
            </li>
            <li>
                <a className='about' href='#About'>About</a>
            </li>
            <li>
                <a className='contact' href='#Contact'>Contact</a>
            </li>
        </ul>
    </div>



*/