import Image from 'next/image';
import styled from 'styled-components';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../atoms/Button.tsx/Button';

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

const Cart = () => {
    const { cartProductQuantity, setCartProductQuantity } = useCart();

    return (
        <Container>
            {cartProductQuantity > 0 && (
                <Button title="Remove items" size="small" onClick={() => setCartProductQuantity(0)}>
                    X
                </Button>
            )}
            <span title="Basket items">{cartProductQuantity > 0 && cartProductQuantity}</span>
            <Image src="/basket.svg" alt="Cart logo" width={20} height={20} />
        </Container>
    );
};

export default Cart;
