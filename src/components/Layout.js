import React from 'react';
import Container from "react-bootstrap/Container";
import HeaderTop from "./Header/HeaderTop";
import MyNavbarTwo from "./Navigation/MyNavbarTwo";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//import PropTypes from "prop-types"

//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/layout.css'
import '../styles/styles.scss';

export default ({children, layoutData})=> {

    return (
        <React.Fragment> 
            <Container fluid={true} style={{maxWidth: 1440}}>
                <HeaderTop />
                <MyNavbarTwo navbarData={layoutData.navbar} />
            </Container>

            <Container id="main" fluid={true} style={{maxWidth: 1440, paddingTop: '1rem'}}>
                <Row className="row-offcanvas row-offcanvas-left clearfix">
                    <main className="main-content col" id="content" role="main">
                        {children}
                    </main>

                    {/*Draw left side bar is not switch off */}
                    {layoutData.sideBarLeft &&
                    <Col md={3} className="sidebar order-first" id="sidebar_first" >
                        {layoutData.sideBarLeft}
                    </Col>}

                    {/*Draw right side bar is not switch off */}
                    {layoutData.sideBarRight &&
                    <Col md={3} className="sidebar order-last" id="sidebar_second" >
                        {layoutData.sideBarRight}  
                    </Col>}
                </Row>
            </Container>
        </React.Fragment>
    );
};