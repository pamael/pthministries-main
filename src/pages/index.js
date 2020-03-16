import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import HOME_QUERY from "../GraphQueries/HOME_QUERY"
import ArticleSummaryHome from "../components/ArticleSummaryHome"
import { Parsedhtml } from "../components/ArticleSummary"
import Spinner from "../components/Spinner"
import Moment from "react-moment"
import { Link as GLink } from "gatsby"

import "../styles/index.css"

export default () => {
  const { loading, data } = useQuery(HOME_QUERY)

  const pData = {
    sideBarLeft: false,
    sideBarRight: false,
    navBar: {
      brand: "homes",
    },
  }
  return (
    <Layout layoutData={pData}>
      <SEO title="Home." />

      {loading && <Spinner />}

      {data && (
        <React.Fragment>
          <h2 className={"page-title title"}>Home</h2>
          <Row>
            <Col lg={9} md={8} sm={12}>
              <Row>
                {data.lead.entities.map((summary, index) => (
                  <Col lg={7} md={12} key={summary.nid}>
                    <img
                      style={{ width: "100%" }}
                      src={summary.image.url}
                      alt={summary.image.alt}
                    />
                    {summary.fieldTags.map(({ tags, nid }) => (
                      <span
                        key={nid}
                        style={{
                          textTransform: "uppercase",
                          color: "#aaa",
                          fontWeight: "bold",
                          fontSize: "0.9em",
                        }}
                      >
                        {tags.name}
                      </span>
                    ))}
                    <span
                      style={{
                        textTransform: "uppercase",
                        color: "#aaa",
                        fontSize: "0.8em",
                      }}
                    >
                      {` - `}
                      <Moment format="DD MMM YYYY">
                        {summary.publishDate.value}
                      </Moment>
                    </span>
                    <h3 style={{ margin: "0.5em 0", fontWeight: "normal" }}>
                      <GLink
                        to={`/articles/${summary.uuid}`}
                        href={summary.path.path}
                      >
                        {summary.title}
                      </GLink>
                    </h3>
                    <div style={{ fontSize: ".95em", textAlign: "justify" }}>
                      <Parsedhtml s={summary.body.summaryProcessed} />
                    </div>
                  </Col>
                ))}
                <Col lg={5} md={12}>
                  {data.primary.entities.map((summary, index) => (
                    <div key={summary.nid} className={"pb-3"}>
                      <GLink
                        to={`/articles/${summary.uuid}`}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          style={{ width: "100%", marginBottom: "0.5em" }}
                          src={summary.image.url}
                          alt={summary.image.alt}
                        />
                        {summary.fieldTags.map(({ tags, nid }, index) => (
                          <span
                            key={nid}
                            style={{
                              textTransform: "uppercase",
                              color: "#aaa",
                              fontWeight: "bold",
                              fontSize: "0.9em",
                            }}
                          >
                            {index > 0 && " / "}
                            {tags.name}
                          </span>
                        ))}
                        <div style={{ fontSize: ".9em", textAlign: "justify" }}>
                          <Parsedhtml s={summary.body.summaryProcessed} />
                        </div>
                      </GLink>
                    </div>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={4} sm={12}>
              {data.devotionals.entities.map((summary, index) => (
                <ArticleSummaryHome summary={summary} key={summary.nid} />
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  marginTop: "1em",
                  fontSize: "0.8em",
                  borderBottom: "3px solid #51BAD9",
                }}
              >
                &nbsp;
              </div>
            </Col>
          </Row>
          <Row
            style={{ marginTop: "0em", fontSize: "0.8em" }}
            className="eventsBar"
          >
            <Col sm={12} md={6}><Row>
            <Col>
              <p className="title">Weekly Study &amp; Worship Services</p>
              <p
                style={{ color: "#52B1C7", fontWeight: "bold" }}
                className="sub-title"
              >
                09.30hrs - 16.30hrs               
              </p>
            </Col>
            <Col>
              <p>Old Chapel - Dunamis Center</p>
              <p>(fmr Northmoor Methodist Church)</p>
              <p>Northmoor Rd, M12 5RT</p>
            </Col>
            </Row>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9502.923898370545!2d-2.192577420231854!3d53.4553951725857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22c6d2909ce53509!2sDunamis%20Centre!5e0!3m2!1sen!2suk!4v1583270789102!5m2!1sen!2suk" 
                 height="450" frameborder="0" style={{border:0, width: "100%"}} allowfullscreen=""></iframe>
              </p>
            </Col>
            <Col sm={12} md={6} style={{ borderLeft: "3px solid #51BAD9", fontSize: "200%" }}>
              <p className="title">April 2020 Bank Holiday Event</p>
              <p style={{ fontWeight: "bold" }} className="sub-title">
              Guest speaker: Nader Mansour
              </p>
              <p>Fri 10 to Sun 12 April</p>              
              <p>
                At <strong>Abraham Moss Primary School Hall</strong>
              </p>
              <p>
                More details soon.
              </p>
            </Col>
            
            {/* <Col>
              <p className="title">&nbsp;</p>
              <p style={{ fontWeight: "bold" }} className="sub-title">
                Study - TBC
              </p>
              <p>Date: 15 February 2020 (TBC)</p>
              <p>Venue: Irish World Heritage Center</p>
              <p>
                Times: 09.30hrs - 16.30hrs<sup>*</sup>
              </p>
            </Col> */}

            {/* <Col>
              <p className="title">&nbsp;</p>
              <p style={{ fontWeight: "bold" }} className="sub-title">
                Symposium - TBC
              </p>
              <p>Date: 29 February 2020 (TBC)</p>
              <p>Venue: Abraham Moss</p>
              <p>
                Times: 09.30hrs - 16.30hrs<sup>*</sup>
              </p>
            </Col> */}
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  marginBottom: "1em",
                  fontSize: "0.8em",
                  borderTop: "3px solid #51BAD9",
                }}
              >
                &nbsp;
              </div>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </Layout>
  )
}
