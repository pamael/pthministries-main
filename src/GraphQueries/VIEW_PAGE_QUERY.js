import gql from "graphql-tag";

//{operator: NOT_LIKE, field: "field_tags.entity.name", value: $notags},

export default gql`
query  article ($uid: [String]) {
  article:nodeQuery (limit: 1
      filter : {
        conditions: [
          {operator: IN, field: "uuid", value: $uid}, 
          {operator: EQUAL, field: "status", value : "1"}
        ]
      }
      ) {
      count
      entities {
        entityCreated
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
            processed
            
          }
          tagsList: fieldTags {
          nid: targetId
          tags: entity {
            name
          }
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