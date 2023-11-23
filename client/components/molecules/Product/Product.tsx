import styled from 'styled-components';
import { ProductFragment } from '../../../generated/graphql';
import ProductActions from '../ProductActions/ProductActions';
import Image from 'next/image';
import ProductSection from '../../atoms/ProductSection/ProductSection';

const Section = styled.div`
    padding: 0 1rem;
`;

const Container = styled.div`
    ${Section}:nth-of-type(even) {
        background-color: var(--hemocyanin);
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ProcutName = styled.h1`
    font-size: 2.2rem;
    font-weight: 400;
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 25rem;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    background: var(--lightgrey);
`;

const SpecsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

export interface ProductProps {
    fragment: ProductFragment;
}

const Product = ({ fragment }: ProductProps) => {
    return (
        <Container>
            <Section>
                <ImgContainer>
                    <Image
                        loader={() => fragment.img_url}
                        src={fragment.img_url}
                        alt="Product image"
                        layout="fill"
                        objectFit="contain"
                        unoptimized
                    />
                </ImgContainer>

                <ProcutName>{fragment.name}</ProcutName>
                <ProductActions fragment={fragment} />
            </Section>
            <Section>
                <ProductSection title="Description">{fragment.description}</ProductSection>
            </Section>
            <Section>
                <ProductSection title="Specifications">
                    <SpecsContainer>
                        <div>Brand</div>
                        <div>{fragment.brand}</div>
                        <div>Item weight (g)</div>
                        <div>{fragment.weight}</div>
                        <div>Dimensions (cm)</div>
                        <div>
                            {fragment.height} x {fragment.width} x {fragment.length}
                        </div>
                        <div>Colour</div>
                        <div>{fragment.colour}</div>
                    </SpecsContainer>
                </ProductSection>
            </Section>
        </Container>
    );
};

export default Product;
