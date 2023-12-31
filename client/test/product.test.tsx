import { render, fireEvent } from '@testing-library/react';
import Product from '../components/molecules/Product/Product';
import { ProductFragment } from '../generated/graphql';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/molecules/Header/Header';

const PRODUCT: ProductFragment = {
    __typename: 'Product',
    id: '1',
    name: 'Energy saving light bulb',
    power: '25W',
    description:
        'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
    price: 1299,
    quantity: 4,
    brand: 'Philips',
    weight: 77,
    height: 12.6,
    width: 6.2,
    length: 6.2,
    model_code: 'E27 ES',
    colour: 'Cool daylight',
    img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png'
};

test('should be able to increase and decrease product quantity', async () => {
    const { getByText, getByTitle } = render(<Product fragment={PRODUCT} />);

    const increaseQuantity = getByText('+');

    const currentQuantity = getByTitle('Current quantity');
    expect(currentQuantity).toHaveTextContent('1');

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent('2');

    const decreaseQuantity = getByText('-');

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent('1');
});

test('should be able to add items to the basket', async () => {
    const { getByText, getByTitle } = render(
        <>
            <CartProvider>
                <Header />
                <Product fragment={PRODUCT} />
            </CartProvider>
        </>
    );

    const increaseQuantity = getByText('+');

    const currentQuantity = getByTitle('Current quantity');

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('4');

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle('Basket items');
    expect(basketItems).toHaveTextContent('4');
});

test('should be able to remove items from the basket', async () => {
    const { getByText, getByTitle } = render(
        <>
            <CartProvider>
                <Header />
                <Product fragment={PRODUCT} />
            </CartProvider>
        </>
    );

    const increaseQuantity = getByText('+');

    const currentQuantity = getByTitle('Current quantity');

    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('2');

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle('Basket items');
    expect(basketItems).toHaveTextContent('2');

    const removeItems = getByText('X');

    fireEvent.click(removeItems);

    expect(basketItems).toBeEmptyDOMElement();
});

test('should not be able to add more items than quantity available', async () => {
    const { getByText, getByTitle } = render(
        <>
            <CartProvider>
                <Header />
                <Product fragment={PRODUCT} />
            </CartProvider>
        </>
    );

    const increaseQuantity = getByText('+');

    const currentQuantity = getByTitle('Current quantity');

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('4');

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle('Basket items');
    expect(basketItems).toHaveTextContent('4');

    fireEvent.click(addToBasketElement);
    setTimeout(() => {
        expect(getByText('There is no more products available')).toBeInTheDocument();
    }, 1000);
});
