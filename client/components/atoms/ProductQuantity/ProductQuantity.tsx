import styled from 'styled-components';
import { ProductQuantityFragment } from '../../../generated/graphql';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

export interface ProductQuantityProps {
    fragment: ProductQuantityFragment;
}

const ProductQuantity = ({ fragment }: ProductQuantityProps) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <Container>
            <button
                onClick={() => {
                    if (quantity !== 1) setQuantity(quantity - 1);
                }}
            >
                -
            </button>
            <span title="Current quantity">Qty {quantity}</span>
            <button
                onClick={() => {
                    if (quantity !== fragment.quantity) setQuantity(quantity + 1);
                }}
            >
                +
            </button>
        </Container>
    );
};

export default ProductQuantity;
