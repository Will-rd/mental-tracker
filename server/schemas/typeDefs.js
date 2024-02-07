const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        username: String
        password: String
        email: String
        touchySubs: [String]
        days: [Day]
        

    }

    type Day {
        _id: ID
        date: String
        spectrum: Int
        entry: String
        user: User
    }

    type Query {
        viewUsers: [User]
    }

    type Mutation {
        addUser(name: String!, username: String!, password: String!, email: String!): User
        addDay(date: String, spectrum: Int, entry: String, user: ID!): Day
    }
`;

module.exports = typeDefs;