import React from "react"
import { useQuery } from "@apollo/react-hooks"
import VIEW_QUERY from "../GraphQueries/VIEW_QUERY"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ArticleSummary from "../components/ArticleSummary"
import Spinner from "../components/Spinner"
import ViewList from "../components/ViewList"

export default () => {
  const { loading, data } = useQuery(VIEW_QUERY, {
    variables: {
      limit: 5,
      tags: "%",
      notintags: ["devotional", "testing", "media"],
    },
  })

  const pData = {
    sideBarLeft: [
      <ViewList key={1} tags={"devotional"} />,
      <ViewList key={2} tags={"media"} limit={3} dspStyle={1} />,
    ],
    sideBarRight: false,
    navBar: {
      brand: "homes",
    },
  }
  return (
    <Layout layoutData={pData}>
      <SEO
        title="Latest Posts"
        keywords={[`Latest Posts`, `Daily`, `Present Truth`]}
      />
      {loading && <Spinner />}

      {data && (
        <React.Fragment>
          <section>
            <h2 className={"page-title title"}>Latest Posts</h2>

            {data.nodeQuery.entities.map((summary, index) => (
              <Row key={summary.nid}>
                <Col>
                  <ArticleSummary
                    link={`/articles/${summary.uuid}`}
                    summary={{
                      ...summary,
                      imgPct: "30%",
                      dtOffImage: true,
                      useSummary: true,
                    }}
                  />
                </Col>
              </Row>
            ))}
          </section>
        </React.Fragment>
      )}
    </Layout>
  )
}
