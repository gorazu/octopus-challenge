import styled from 'styled-components';
import { ProductQuantityFragment } from '../../../generated/graphql';
import { useCallback, useState } from 'react';
import ProductQuantity, {
    ProductQuantityAction
} from '../../atoms/ProductQuantity/ProductQuantity';
import { useCart } from '../../../contexts/CartContext';

const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

export interface ProductActionsProps {
    fragment: ProductQuantityFragment;
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
        <Container>
            <ProductQuantity quantity={quantity} onUpdateQuantity={updateQuantity} />
            <button onClick={() => setCartProductQuantity(quantity)}>Add to cart</button>
        </Container>
    );
};

export default ProductActions;
