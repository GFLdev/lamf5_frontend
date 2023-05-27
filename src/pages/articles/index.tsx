import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Articles() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.DB_URI
    });

    return (<main><ApolloProvider client={client}></ApolloProvider></main>);
}