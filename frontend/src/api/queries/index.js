import { loader } from "graphql.macro";

export default {
    passport: loader("./passport.gql"),
    createPassport: loader("./createPassport.gql")
}