import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import VIEW_QUERY from '../GraphQueries/VIEW_QUERY';
import SEO from "../components/seo";
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticleSummary from "../components/ArticleSummary";
import Spinner from "../components/Spinner"
import ViewList from '../components/ViewList'

export default () => {
    
    const { loading, error, data } = useQuery(VIEW_QUERY, { variables: {
        limit: 5, 
        tags: 'media',
    }});
    
    const pData = { 
        sideBarLeft : [<ViewList tags={"devotional"} limit={3} />],
        sideBarRight: [<ViewList tags={"%"} notags={"devotional"} limit={10} dspStyle={2} />],
        navBar : {
            brand : 'home'
        }
    }
    return (
        <Layout layoutData={pData}>
            <SEO 
                title="Media"
                keywords={[`Media`, `Videos`, `PDFs`, `eBooks`, 'Audio', 'Audible']}
                description= 'Find video sermons, audio messages and books as well as reading material.'
            />
            {loading && <Spinner />}

            {/* {error && <DataError />} */}

            {data && <React.Fragment>
                <section>
                    <h2 className={'page-title title'}>Media</h2>  
                                                        
                    {data.nodeQuery.entities.map((summary, index) =>
                        <Row key={summary.nid}>
                            <Col > 
                                <ArticleSummary summary={{...summary, imgPct: '30%', dtOffImage: true, useSummary: true}} />
                            </Col>
                        </Row>
                    )}
                </section>
            </React.Fragment>}
        </Layout>
        
    );
}