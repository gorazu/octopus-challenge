import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from '../components/molecules/Header/Header';
import { CartProvider } from '../contexts/CartContext';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider {...{ client }}>
            <CartProvider>
                <Header />
                <Component {...pageProps} />
            </CartProvider>
        </ApolloProvider>
    );
}

export default MyApp;
