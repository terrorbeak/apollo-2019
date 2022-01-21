import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new createHttpLink({ uri: "https://movieql.now.sh/" }),
});

export default client;
