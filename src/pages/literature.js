import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import SEO from "../components/seo";
import Layout from '../components/Layout';
import PAGE_QUERY from '../GraphQueries/PAGE_QUERY';
import { Parsedhtml } from '../components/ArticleSummary'
import Spinner from '../components/Spinner'
import ViewList, { SpacerH2 } from '../components/ViewList'

export default () => {
    
    const { loading, error, data } = useQuery(PAGE_QUERY, { variables: {
        pageTag: "literature",
    }});
    
    const pData = { 
        sideBarLeft : [<SpacerH2 key={1} />, <ViewList key={2} tags={"devotional"} />, <ViewList key={3} tags={"media"} limit={3} dspStyle={1} />],
        sideBarRight: [<SpacerH2 key={1} />, <ViewList key={2} tags={"devotional"} offset={1} />, <ViewList key={3} tags={"%"} notags={"devotional"} limit={10} dspStyle={2} />],
        navBar : {
            brand : 'home'
        }
    }
    return (
        <Layout layoutData={pData}>
            <SEO 
                title="Literature"
                keywords={[`Literature`, `Reading`, `Books`]}
            />
            {loading && <Spinner />}
            <section>
                {data && data.nodeQuery.entities.map((pageNode, index) =>
                    <div key={index}>
                        <h2 className={'page-title title'}>{pageNode.title}</h2>
                        <Parsedhtml s={pageNode.body.processed} />                    
                    </div>
                )}
                
            </section>
        </Layout>
        
    );
}