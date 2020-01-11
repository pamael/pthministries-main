import gql from "graphql-tag";

export default gql`
query side_bar ($limit: Int, $offset: Int!) {
  qr1: nodeQuery (limit: $limit, offset : $offset,
    filter : {
      conditions: [
        {operator: EQUAL, field: "type", value: "article"},
        {operator: EQUAL, field: "field_tags.entity.name", value: "devotional"},
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
  },
  primary: nodeQuery (limit : 2,
    filter : {
      conditions: [
        {operator: EQUAL, field: "type", value: "article"},
        {operator: EQUAL, field: "field_front_tags.entity.name", value: "primary"}
      ]
    },
    sort : [
      { direction: DESC, field: "field_publish_date"},
      { direction:DESC, field: "created" }
    ]) {
    count
    entities {
      ...on NodeArticle {
        created : entityCreated
        nid
        uuid
        title
        publishedDate: fieldPublishDate {
          value
        }
        path: entityUrl { path }
        body {
          format
          summaryProcessed
          
        }
        fieldTags {
          nid: targetId
          tags: entity {
            name
          }
        }
        image: fieldImage {
          height
          width
          url
          alt
          title
        }
      }
    }
  },
  devotionals: nodeQuery (limit: 4,
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
          fieldTags {
            nid: targetId
            tags: entity {
              name
            }
          }
          image: fieldImage {
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
;