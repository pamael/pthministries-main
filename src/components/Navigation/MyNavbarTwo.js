import React from 'react';
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

export default ({ navbarData })=> {

    let branding;
    let firstMenuItem;

    if (navbarData && navbarData.brand) {
        branding = <Navbar.Brand href="/">{navbarData.brand}</Navbar.Brand>
        firstMenuItem = ''
    } else {
        branding = '';
        firstMenuItem =
            <NavLink href="/">
                Home <span className="sr-only">(current)</span>
            </NavLink>;
    }

    return (
        <Navbar expand="md" bg="dark" variant="dark">
            {branding}
            <Navbar.Toggle aria-controls="navbarNavDropdown"/>
            <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="mr-auto">
                    {firstMenuItem}
                    {/* <NavLink href={"/content/prophecy"}>Prophecy</NavLink> */}
                    <NavLink href={"/health"}>Health</NavLink>
                    <NavLink href={"/devotionals"}>Devotional</NavLink>
                    <NavLink href={"/blog"}>Blog</NavLink>
                    <NavLink href={"/literature"}>Literature</NavLink>
                    <NavLink href={"/media"}>Media</NavLink>
                    <NavLink href={"/about-us"}>About Us</NavLink>
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
    
