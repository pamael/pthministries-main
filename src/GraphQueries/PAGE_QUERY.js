import gql from "graphql-tag";

export default gql`
  query  page ($pageTag: [String]) {
    nodeQuery (
      filter : {
        conditions: [
          {operator: EQUAL, field: "type", value: "page"},
          {operator: EQUAL, field: "field_tags.entity.name", value: $pageTag },
          {operator: EQUAL, field: "status", value : "1"}
        ]
      },
      ) {
      count
      entities {
        entityCreated
        ...on NodePage {
          nid
          title
          body {
            processed
          }
        }
      }
    }
  }`