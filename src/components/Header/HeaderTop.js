import React from 'react';
import {Row, Col, Navbar} from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby"

const HeaderTop = ()=> {
    const siteData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
    `);

    const { site : { siteMetadata : { title }} } = siteData;
    
    return (
        <header className="blog-header py-3">
            <Row>
                {/* <Col xs={3} className="pt-1">
                    <a className={"text-muted"} href="/subscribe.html">
                        Subscribe
                    </a>
                </Col> */}
                <Col xs={12} className={"text-left"}>
                    <Navbar.Brand className={"blog-header-logo text-dark"} href="/">
                        {(title) ? title : "Missing Title"}
                    </Navbar.Brand>
                </Col>
                {/* <Col xs={3} className={"d-flex justify-content-end align-items-center"}>
                    <a className="text-muted" href="/search.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="mx-3">
                            <circle cx="10.5" cy="10.5" r="7.5"/>
                            <line x1="21" y1="21" x2="15.8" y2="15.8"/>
                        </svg>
                    </a>
                    <a className="btn btn-sm btn-outline-secondary" href="/sign-up.html">Sign up</a>
                </Col> */}
            </Row>
        </header>
    )
};

export default HeaderTop;