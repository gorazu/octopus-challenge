import styled from 'styled-components';
import { ProductActionsFragment } from '../../../generated/graphql';
import { useCallback, useState } from 'react';
import ProductQuantity, {
    ProductQuantityAction
} from '../../atoms/ProductQuantity/ProductQuantity';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../atoms/Button.tsx/Button';

const Price = styled.span`
    font-size: 2rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    gap: 1rem;
`;

const StyledButton = styled(Button)`
    grid-column: 1 / -1;
`;

export interface ProductActionsProps {
    fragment: ProductActionsFragment;
}

const ProductActions = ({ fragment }: ProductActionsProps) => {
    const [quantity, setQuantity] = useState(1);
    const { setCartProductQuantity } = useCart();

    const updateQuantity = useCallback(
        (action: ProductQuantityAction) => {
            switch (action) {
                case ProductQuantityAction.DECREASE:
                    quantity > 1 && setQuantity((quantity) => quantity - 1);
                    return;
                case ProductQuantityAction.INCREASE:
                    quantity !== fragment.quantity && setQuantity((quantity) => quantity + 1);
                    return;
                default:
                    return;
            }
        },
        [quantity, fragment.quantity]
    );

    return (
        <Grid>
            <Price>
                {Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(fragment.price / 100)}
            </Price>
            <ProductQuantity
                quantity={quantity}
                maxQuantity={fragment.quantity}
                onUpdateQuantity={updateQuantity}
            />
            <StyledButton onClick={() => setCartProductQuantity(quantity)}>
                Add to cart
            </StyledButton>
        </Grid>
    );
};

export default ProductActions;
