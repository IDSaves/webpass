import express from "express";
import mongoose  from "mongoose";
import bodyParser  from "body-parser";
import graphql  from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./graphql/resolvers";
import fs from "fs";
import path from "path";
require("dotenv").config();

const app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

const typeDefs = fs.readFileSync("./graphql/Schema.graphql", "utf8").toString();
app.use("/graphql",
    graphql({
        schema: makeExecutableSchema({ typeDefs, resolvers }),
        graphiql: true
    })
);

app.listen(4000, () => {
    mongoose.connect("mongodb://localhost:27017/webpass", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (error) throw error;
        console.log("MongoDb is running");
    });
    console.log("App is working");
});