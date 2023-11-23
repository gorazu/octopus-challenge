import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider {...{ client }}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
