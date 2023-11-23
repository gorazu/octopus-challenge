import styled from 'styled-components';
import { ProductQuantityFragment } from '../../../generated/graphql';
import { useState } from 'react';

export enum ProductQuantityAction {
    INCREASE,
    DECREASE
}

const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

export interface ProductQuantityProps {
    quantity: number;
    onUpdateQuantity: (action: ProductQuantityAction) => void;
}

const ProductQuantity = ({ quantity, onUpdateQuantity }: ProductQuantityProps) => {
    return (
        <Container>
            <button onClick={() => onUpdateQuantity(ProductQuantityAction.DECREASE)}>-</button>
            <span title="Current quantity">Qty {quantity}</span>
            <button onClick={() => onUpdateQuantity(ProductQuantityAction.INCREASE)}>+</button>
        </Container>
    );
};

export default ProductQuantity;
