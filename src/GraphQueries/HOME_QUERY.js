import gql from "graphql-tag";

export default gql`
query {
  lead: nodeQuery (
    filter : {
      conditions: [
        {operator: EQUAL, field: "type", value: "article"},
        {operator: EQUAL, field: "field_front_tags.entity.name", value: "lead"}
      ]
    }) {
    count
    entities {
      ...on NodeArticle {
        created : entityCreated
        nid
        uuid
        title
        publishDate: fieldPublishDate {
          value
        }
        path: entityUrl { path }
        body {
          format
          summaryProcessed
          
        }
        image: fieldImage {
          height
          width
          url
          alt
          title
        }
        fieldTags {
          nid: targetId
          tags: entity {
            name
          }
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