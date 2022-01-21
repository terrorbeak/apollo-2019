import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new createHttpLink({ uri: "http://localhost:4000/" }),
});

export default client;
