import Image from 'next/image';
import styled from 'styled-components';
import { logoSrc } from '../../../pages';
import { useCart } from '../../../contexts/CartContext';
import Cart from '../Cart/Cart';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0.5rem 1rem;
`;

const Header = () => {
    const { cartProductQuantity } = useCart();
    return (
        <Container>
            <Image
                loader={() => logoSrc}
                src={logoSrc}
                alt="Octopus Energy Logo"
                width={235}
                height={33}
            />
            <Cart />
        </Container>
    );
};

export default Header;
