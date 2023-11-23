import styled from 'styled-components';
import Button from '../Button.tsx/Button';

export enum ProductQuantityAction {
    INCREASE,
    DECREASE
}

const ActionsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    margin-left: auto;
`;

const Quantity = styled.span`
    font-size: 2rem;
    min-width: 1ch;
`;

export interface ProductQuantityProps {
    quantity: number;
    maxQuantity: number;
    onUpdateQuantity: (action: ProductQuantityAction) => void;
}

const ProductQuantity = ({ quantity, maxQuantity, onUpdateQuantity }: ProductQuantityProps) => {
    return (
        <Container>
            <span>Qty</span>
            <ActionsContainer>
                <Button
                    disabled={quantity === 1}
                    size="small"
                    onClick={() => onUpdateQuantity(ProductQuantityAction.DECREASE)}
                >
                    -
                </Button>
                <Quantity title="Current quantity">{quantity}</Quantity>
                <Button
                    disabled={quantity === maxQuantity}
                    size="small"
                    onClick={() => onUpdateQuantity(ProductQuantityAction.INCREASE)}
                >
                    +
                </Button>
            </ActionsContainer>
        </Container>
    );
};

export default ProductQuantity;
