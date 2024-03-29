import React from 'react'
import ViewList, { SpacerH2 } from '../components/ViewList'
import { useQuery } from '@apollo/react-hooks'
import VIEW_PAGE_QUERY from '../GraphQueries/VIEW_PAGE_QUERY'
import SEO from "../components/seo"
import Layout from '../components/Layout'
import Spinner from "../components/Spinner"
import { Parsedhtml } from "../components/ArticleSummary"


export default ({articleID}) => {
  console.log('@@', articleID)

  if(articleID === '') {
    return <div>Error</div>
  }

  const { loading, data } = useQuery(VIEW_PAGE_QUERY, { variables: {
      uid: articleID,
  }});
  
  const pData = { 
      // sideBarLeft : false,
      // sideBarRight: [<SpacerH2 />, <ViewList tags={"%"} notags='devotional' limit={10} dspStyle={2} />],
      sideBarLeft : [<SpacerH2 key={1} />,<ViewList key={2} tags={"devotional"} />, <ViewList key={3} tags={"media"} limit={3} dspStyle={1} />],
      sideBarRight: [<SpacerH2 key={4}/>,<ViewList key={5} tags={"devotional"} offset={1} />, <ViewList key={6} tags={"%"} notags={"devotional"} limit={10} dspStyle={2} />],
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

          {data && data.article && data.article.entities.map((article) => (
              <section key={article.nid}>
              <h2 className={'page-title title'}>{article.title}</h2>  
              <div>                                        
                  <Parsedhtml s={article.body.processed} />
              </div>
              </section>
          ))}
      </Layout>
      
  );
}
