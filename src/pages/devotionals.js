import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import VIEW_QUERY from '../GraphQueries/VIEW_QUERY';
import SEO from "../components/seo";
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticleSummary from "../components/ArticleSummary";
import Spinner from "../components/Spinner"
import ViewList, { SpacerH2 } from '../components/ViewList';
import Article from './article';

export default ({location: { search }}) => {

    if(search !== '') {
        return <Article slug={search} />
    }
    
    return <DevotionalHome />
    
}

const DevotionalHome = () => {

    const { loading, error, data } = useQuery(VIEW_QUERY, { variables: {
        limit: 10, 
        tags: 'devotional',
    }});
    
    const pData = { 
        sideBarLeft : false,
        sideBarRight: [<SpacerH2 key={1} />, <ViewList key={2} tags={"%"} notags='devotional' limit={10} dspStyle={2} />],
        navBar : {
            brand : 'home'
        }
    }
    return (
        <Layout layoutData={pData}>
            <SEO 
                title="Daily Devotionals"
                keywords={[`Devotionals`, `Daily`, `Present Truth`]}
            />
            {loading && <Spinner />}

            {data && <React.Fragment>
                <section>
                <h2 className={'page-title title'}>Daily Devotionals</h2>  
                <div>                                        
                    <Row>
                        {data.nodeQuery.entities.map((summary, index) =>
                            <Col sm={6} key={summary.nid}>                                
                                <ArticleSummary summary={summary} link={`/article/?${summary.uuid}`} />
                            </Col>
                        )}
                    </Row>
                </div>
                </section>
            </React.Fragment>}
        </Layout>
        
    );
}
