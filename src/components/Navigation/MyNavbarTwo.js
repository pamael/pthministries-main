import React from 'react';
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
//import NavLink from "react-bootstrap/NavLink";
import { Link as GLink } from 'gatsby'

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch
//   } from "react-router-dom";

export default ({ navbarData })=> {

    let branding;
    let firstMenuItem;

    if (navbarData && navbarData.brand) {
        branding = <Navbar.Brand href="/">{navbarData.brand}</Navbar.Brand>
        firstMenuItem = ''
    } else {
        branding = '';
        firstMenuItem =
            <GLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
            </GLink>;
    }

    return (
        <Navbar expand="md" bg="dark" variant="dark">
            {branding}
            <Navbar.Toggle aria-controls="navbarNavDropdown"/>
            <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="mr-auto">
                    
                    {firstMenuItem}
                    {/* <NavLink href={"/content/prophecy"}>Prophecy</NavLink> */}
                    <GLink className="nav-link" to="/health">Health</GLink>
                    {/* <NavLink href={"/devotionals"}>Devotional</NavLink> */}
                    <GLink className="nav-link" to="/devotionals" partiallyActive={true}>Devotional</GLink>
                    <GLink className="nav-link" to="/blog">Blog</GLink>
                    <GLink className="nav-link" to="/literature">Literature</GLink>
                    <GLink className="nav-link" to="/media">Media</GLink>
                    <GLink className="nav-link" to="/about-us">About Us</GLink>
                    {/* <NavLink href={"/content/feedback"}>Get In Touch</NavLink> */}
                    {/* <NavDropdown id={'something'} title={'Drop down'}>
                        <NavDropdown.Item href={'#action/2.1'}>Action 2.1</NavDropdown.Item>
                        <NavDropdown.Item href={'#action/2.2'}>Action 2.2</NavDropdown.Item>
                        <NavDropdown.Item href={'#action/2.3'}>Action 2.3</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href={'#action/2.4'}>Action 2.4</NavDropdown.Item>
                    </NavDropdown> */}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
    
