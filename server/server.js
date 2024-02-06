const express = require('express');
// Apollo-server-express is deprecated currently. need to make sure it is updated soon!
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas')

// const models = require("./models");

// mongoose connector
const db = require("./config/connection");
//PORT
const PORT = process.env.PORT || 3001;
//Instantiate the apollo server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});
//express
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Start the apollo server, then connect to express, connect to mongoose, THEN start the app.
const startApolloServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    db.once('open', () => {

        app.listen(PORT, () => {
            console.log("Server running on PORT 3001!");
        })
    })
}

startApolloServer();


