import gql from "graphql-tag";

export default gql`
query  devotionals($limit : Int!, $offset: Int!) {
  nodeQuery (limit: $limit, offset: $offset,
      filter : {
        conditions: [
          {operator: EQUAL, field: "type", value: "article"},
          {operator: EQUAL, field: "field_tags.entity.name", value: "Devotional"},
                  {operator: EQUAL, field: "status", value : "1"}
        ]
      }
          sort : [
        { direction: DESC, field: "field_publish_date"},
        { direction: DESC, field: "created" }
      ]) {
      count
      entities {
        link: entityUrl {
            path
        }
        ...on NodeArticle {
          nid
          uuid
          title
          created
          publishDate: fieldPublishDate {
            value
          }        
          body {
            format
            summaryProcessed
            processed
          }
          author: uid {
            entity {
              ...on User {
                name
                mail
                status
                path1: entityUrl {
                  path
                }
              }
            }
          }
         
          fieldImage {
            height
            width
            url
            alt
            title
          }
        }
      }
    }
  }`