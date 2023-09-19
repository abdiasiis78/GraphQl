export const typesDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platforms: [String!]!

}
type Review {
    id: ID!
    rating: String!
    content: String!
}

type Author {
    id: ID!
    name: String!
    verfied: Boolean
}

type Query {
  reviews: [Review]
  games: [Game]
  authors: [Author]  
}

`

// Int , float , string , boolean ,ID