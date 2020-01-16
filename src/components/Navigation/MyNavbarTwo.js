import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
//import NavLink from "react-bootstrap/NavLink";
import { Link as GLink } from 'gatsby'

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
                    <GLink className="nav-link" to="/health">Health</GLink>
                    <GLink className="nav-link" to="/devotionals" partiallyActive={true}>Devotional</GLink>
                    <GLink className="nav-link" to="/blog">Blog</GLink>
                    <GLink className="nav-link" to="/literature">Literature</GLink>
                    <GLink className="nav-link" to="/media">Media</GLink>
                    <GLink className="nav-link" to="/about-us">About Us</GLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
    
