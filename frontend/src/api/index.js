import queries from "./queries";
import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";

export default async (name, variables) => {
    const gqlClient = new GraphQLClient("https://api.webpass.app/graphql");
    const query = queries[name];
    try {
        const result = await gqlClient.rawRequest(print(query), variables);
        return result;
    }
    catch (e) {
        throw new Error(e);
    }
}