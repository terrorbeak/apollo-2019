import ApolloClient from "apollo-client";

const client = new ApolloClient({
    uri: "http://movieql.now.sh/",
});

export default client;
