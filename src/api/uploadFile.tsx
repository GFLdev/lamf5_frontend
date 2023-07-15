import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type File {
        id: ID!
        filename: String!
        mimetype: String!
        enconding: String!
    }

    type Query {
        getAllUploads: [File!]!
        getUpload: File!
    }

    type Mutation {
        singleUpload(file: Upload!): File!
    }
`;

const resolvers = gql`
    Query: {
        getAllUploads: ()
    }
`