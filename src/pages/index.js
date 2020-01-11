import React from "react"
import { useQuery } from '@apollo/react-hooks'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HOME_QUERY from "../GraphQueries/HOME_QUERY"
import ArticleSummaryHome from "../components/ArticleSummaryHome"
import { Parsedhtml } from '../components/ArticleSummary'
//import poster4 from "../assets/PTHM Small Poster 4 Jan 2020 .pdf"
import Spinner from "../components/Spinner"
import Moment from 'react-moment';

import '../styles/index.css'


export default () => {
 
  const { loading, error, data } = useQuery(HOME_QUERY);

  const pData = { 
    sideBarLeft : false,
    sideBarRight: false,
    navBar : {
        brand : 'home'
    }
  }
  return (
    <Layout layoutData={pData}>
        <SEO title="Home" />
        
        {loading && <Spinner />}

        {data && <React.Fragment>
            <h2 className={'page-title title'}>Home</h2>
            <Row>
            <Col lg={9} md={8} sm={12} >
                <Row>
                    {data.lead.entities.map((summary, index) =>
                    <Col lg={7} md={12} key={summary.nid}>
                        <img
                            style={{width: '100%'}}
                            src={summary.image.url}
                            alt={summary.image.alt}
                        />
                        {summary.fieldTags.map(({tags, nid })=> 
                            <span key={nid } style={{textTransform: 'uppercase', color: '#aaa', fontWeight: 'bold', fontSize: '0.9em'}}>
                                {tags.name}
                            </span>
                        )}
                        <span style={{textTransform: 'uppercase', color: '#aaa', fontSize: '0.8em'}}>
                            {` - `} 
                            <Moment format='DD MMM YYYY'>
                                {summary.publishDate.value}
                            </Moment>
                        </span>
                        <h3 style={{ margin: '0.5em 0', fontWeight: "normal"}}>
                            <a href={summary.path.path}>
                                {summary.title}
                            </a>
                        </h3>
                        <div style={{fontSize: '.95em', textAlign: 'justify'}}>
                            <Parsedhtml s={summary.body.summaryProcessed} />
                        </div>
                        
                    </Col>)}
                    <Col lg={5} md={12} >
                        {data.primary.entities.map((summary, index) =>
                            <div key={summary.nid} className={'pb-3'}>
                                <a href={summary.path.path} style={{cursor: 'pointer'}}>
                                    <img
                                        style={{width: '100%', marginBottom: '0.5em'  }}
                                        src={summary.image.url}
                                        alt={summary.image.alt}
                                    />
                                    {summary.fieldTags.map(({tags, nid }, index)=> 
                                        <span key={nid } style={{textTransform: 'uppercase', color: '#aaa', fontWeight: 'bold', fontSize: '0.9em'}}>
                                            {index > 0 && ' / '}
                                            {tags.name}
                                            
                                        </span>
                                    )}
                                    <div style={{fontSize: '.9em', textAlign: 'justify'}}>
                                        <Parsedhtml s={summary.body.summaryProcessed} />
                                    </div>
                                </a>
                            </div>
                        )}                        
                    </Col>
                </Row>
            </Col>
            <Col lg={3} md={4} sm={12}>
                {data.devotionals.entities.map((summary, index) =>                                                    
                    <ArticleSummaryHome summary={summary} key={summary.nid} />                    
                )}
            </Col>
        </Row>         
        <Row>
            <Col>
                <div style={{marginTop: '1em', fontSize: '0.8em', borderBottom: '3px solid #51BAD9'}}>
                    &nbsp;
                </div>
            </Col>
        </Row>  
        <Row style={{marginTop: '0em', fontSize: '0.8em'}} className="eventsBar">
            <Col >
                <p className="title">Next Event</p>
                <p style={{color : '#52B1C7', fontWeight: 'bold'}} className="sub-title">Symposium - The God we worship (..cntd)</p>
                <p>Date:  18 January 2020</p>
                <p>Venue: Irish World Heritage Center</p>
                <p>Times: 09.30hrs - 16.30hrs<sup>*</sup></p>
                {/* <p><a href={poster4} download="poster-4.12.20.pdf" style={{ color: '#ce3f3f'}}>Download more information</a></p> */}
            </Col>

            <Col style={{borderLeft: '3px solid #51BAD9'}}>
                <p className="title">Future Events</p>
                <p style={{fontWeight: 'bold'}} className="sub-title">Study - TBC</p>
                <p>Date: 01 February 2020 </p>
                <p>Venue: <strong>Irish World Heritage Center</strong></p>
                <p>Times: 09.30hrs - 16.30hrs<sup>*</sup></p>
            </Col>

            <Col>
                <p className="title">&nbsp;</p>
                <p style={{fontWeight: 'bold'}} className="sub-title">Study - TBC</p>
                <p>Date: 15 February 2020 (TBC)</p>
                <p>Venue: Irish World Heritage Center</p>
                <p>Times: 09.30hrs - 16.30hrs<sup>*</sup></p>
            </Col>

            <Col>
                <p className="title">&nbsp;</p>
                <p style={{fontWeight: 'bold'}} className="sub-title">Symposium - TBC</p>
                <p>Date: 29 February 2020 (TBC)</p>
                <p>Venue: Abraham Moss</p>
                <p>Times: 09.30hrs - 16.30hrs<sup>*</sup></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{marginBottom: '1em', fontSize: '0.8em', borderTop: '3px solid #51BAD9'}}>
                    &nbsp;
                </div>
            </Col>
        </Row>
        </React.Fragment>}       
    </Layout>
    
  );
}

//export default IndexPage
