import gql from "graphql-tag";

//{operator: NOT_LIKE, field: "field_tags.entity.name", value: $notags},

export default gql`
query  view ($tags: [String] = "", $notags: [String] = "", $notintags: [String] = "", $limit : Int = 0, $offset: Int = 0) {
  nodeQuery (limit: $limit, offset: $offset,
      filter : {
        conditions: [
          {operator: EQUAL, field: "type", value: "article"},
          {operator: LIKE, field: "field_tags.entity.name", value: $tags},
          {operator: NOT_LIKE, field: "field_tags.entity.name", value: $notags},
          {operator: NOT_IN, field: "field_tags.entity.name", value: $notintags},  
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
        entityCreated
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