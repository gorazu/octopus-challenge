import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const Container = styled.div`
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
`;

const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0;
`;

const Content = styled.p`
    width: 100%;
    font-size: 1rem;
    line-height: 1.6rem;
    margin: 0;
    padding: 0;
`;

export interface ProductSectionProps extends PropsWithChildren {
    title?: string;
    className?: string;
}

const ProductSection = ({ title, children, className }: ProductSectionProps) => {
    return (
        <Container className={className}>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Container>
    );
};

export default ProductSection;
