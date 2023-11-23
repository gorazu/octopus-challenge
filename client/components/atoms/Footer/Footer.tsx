import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    background-color: var(--hemocyanin);
`;

const Content = styled.p`
    font-size: 0.7rem;
    line-height: 1.2rem;
    margin: 0;
    padding: 0;
    color: var(--purpleHaze);
`;

const Footer = () => {
    return (
        <Container>
            <Content>
                Octopus Energy Ltd is a company registered in England and Wales Registered number:
                09263424. Registered office: 33 Holborn. London. ECIN 2HT. Tradina office: 20-24
                Broadwick Street. London. WE 8HT
            </Content>
        </Container>
    );
};

export default Footer;
