const express = require('express');

const models = require("./models")
// mongoose connector
const db = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 3001;

db.once('open', () => {
    
    app.listen(PORT, () => {
        console.log("Server running on PORT 3001!");
    })
}) 

