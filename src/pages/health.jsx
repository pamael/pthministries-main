import React from 'react'
import ReactPlayer from 'react-player'
// import { useQuery } from '@apollo/react-hooks'
import SEO from "../components/seo";
import Layout from '../components/Layout';
// import PAGE_QUERY from '../GraphQueries/PAGE_QUERY';
import ViewList, { SpacerH2 } from '../components/ViewList'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ResponsivePlayer = ({url}) => {
  
  return (
    <div className='player-wrapper' style={{ position: 'relative', paddingTop: '56.25%'}}>
      <ReactPlayer
        className='react-player' style={{ position: 'absolute', top: 0, left: 0 }}
        url={url}
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  )
  
}



export default () => {
    
    // const { loading, error, data } = useQuery(PAGE_QUERY, { variables: {
    //     pageTag: "about",
    // }});
    
    const pData = { 
        sideBarLeft : [<ViewList tags={"devotional"} />, <ViewList tags={"media"} limit={3} dspStyle={1} />],
        sideBarRight: [<ViewList tags={"devotional"} offset={1} />, <ViewList tags={"%"} notags={"devotional"} limit={10} dspStyle={2} />],
        navBar : {
            brand : 'home'
        }
    }
    return (
        <Layout layoutData={pData}>
            <SEO 
                title="Health &amp; Wellness"
                keywords={[`Health`, `Welness`, `Mission`]}
            />
            {/* {loading && <Spinner />} */}
            <section>
                {/* {data && data.nodeQuery.entities.map((pageNode, index) =>
                    <div key={pageNode.nid}>
                        <h2 className={'page-title title'}>{pageNode.title}</h2>
                        <Parsedhtml s={pageNode.body.processed} />                    
                    </div>
                )} */}
                <h2 className={'page-title title'}>Health &amp; Wellness</h2>
                <p style={{ color: '#888'}}>Mind, body, and spirit</p>
                <Row>
                  <Col sm={5}>
                    <p>Investigate your habits of diet. Study from cause to effect, but do not bear false witness against health reform by 
                    ignorantly pursuing a course which militates against it.</p> 
                    
                    <p>Do not neglect or abuse the body, and thus unfit it to render to God that service which is His due.</p>
                  </Col>
                  <Col className="order-first" sm={7}>
                    <ResponsivePlayer  url = { "https://www.youtube.com/watch?list=PLWb0m0OnuYwyoRytCEqQJynIItpcZnGrs&v=svdF7gPgFJU" } />
                  </Col>
                </Row>
                <Row className={"pt-5"}>
                  <Col sm={5}>
                    <p>To care for the body by providing for it food which is relishable and strengthening, 
                      is one of the first duties of the householder. Better by far have less expensive clothing and furniture, 
                      than to scrimp the supply of necessary articles for the table.
                    </p>—[Christian Temperance and Bible Hygiene, 58] <strong>Counsels on Health, 155, 156, 1890</strong>
                  </Col>
                  <Col  sm={7}>
                    <ResponsivePlayer  url = { "https://www.youtube.com/watch?v=tTSvlGniHok" } />
                  </Col>
                </Row>
                <Row className={"pt-5"}>
                  <Col sm={5}>
                    <p>Could you be drinking too little or too much water? </p>
                    <p>Watch and listen to Dr Robert Young talk about water intake and whether the pH matters.</p>
                    <p>Our bodies are 80% water, so water matters to our health.</p>
                  </Col>
                  <Col className="order-first" sm={7}>
                    <ResponsivePlayer  url = { "https://youtu.be/xTr-aqZTMxc" } />
                  </Col>
                </Row>

                
                
            </section>
        </Layout>
        
    );
}