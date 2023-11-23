import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from '../components/molecules/Header/Header';
import { CartProvider } from '../contexts/CartContext';
import Footer from '../components/atoms/Footer/Footer';
import styled from 'styled-components';

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (min-width: 769px) {
        padding: 0 5rem;
    }
    @media (min-width: 1025px) {
        padding: 0 10rem;
    }
    @media (min-width: 1201px) {
        padding: 0 15rem;
    }
    @media (min-width: 1400px) {
        padding: 0 20rem;
    }
    @media (min-width: 1600px) {
        padding: 0 25rem;
    }
    @media (min-width: 1900px) {
        padding: 0 30rem;
    }
`;

const Spacer = styled.div`
    margin-top: auto;
`;

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider {...{ client }}>
            <CartProvider>
                <MainLayout>
                    <Header />
                    <Component {...pageProps} />
                    <Spacer />
                    <Footer />
                </MainLayout>
            </CartProvider>
        </ApolloProvider>
    );
}

export default MyApp;
