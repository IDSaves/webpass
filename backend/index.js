const express = require("express");
const mongoose  = require("mongoose");
const bodyParser  = require("body-parser");
const graphql  = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./graphql/resolvers");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

const typeDefs = fs.readFileSync(path.join(__dirname, "/graphql/Schema.graphql"), "utf8").toString();
app.use("/graphql",
    graphql({
        schema: makeExecutableSchema({ typeDefs, resolvers }),
        graphiql: true
    })
);

app.listen(4000, () => {
    let mongoHost = process.env.MODE === "prod" ? process.env.MONGO_HOST : "localhost";
    mongoose.connect(`mongodb://${mongoHost}:27017/webpass?authSource=admin`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: process.env.MODE === "prod" && process.env.MONGO_USER,
        pass: process.env.MODE === "prod" && process.env.MONGO_PWD
    },
    (error) => {
        if (error) throw error;
        console.log("MongoDb is running");
    });
    console.log("App is working");
});