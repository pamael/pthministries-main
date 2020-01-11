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
        pageTag: "about",
    }});
    
    const pData = { 
        sideBarLeft : [<SpacerH2 />,<ViewList tags={"devotional"} />, <ViewList tags={"media"} limit={3} dspStyle={1} />],
        sideBarRight: [<SpacerH2 />,<ViewList tags={"devotional"} offset={1} />, <ViewList tags={"%"} notags={"devotional"} limit={10} dspStyle={2} />],
        navBar : {
            brand : 'home'
        }
    }
    return (
        <Layout layoutData={pData}>
            <SEO 
                title="About Us"
                keywords={[`About Us`, `Bible Study`, `Mission`]}
            />
            {loading && <Spinner />}
            <section>
                {data && data.nodeQuery.entities.map((pageNode, index) =>
                    <div key={pageNode.nid}>
                        <h2 className={'page-title title'}>{pageNode.title}</h2>
                        <Parsedhtml s={pageNode.body.processed} />                    
                    </div>
                )}
                
            </section>
        </Layout>
        
    );
}