const MutationResolvers = require("./mutation");
const QueryResolvers = require("./query");

module.exports = {
    Query: QueryResolvers,
    Mutation: MutationResolvers
}