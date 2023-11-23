import { useProductsQuery } from '../../../generated/graphql';
import Product from '../../molecules/Product/Product';

const ProductPage = () => {
    const { loading, data } = useProductsQuery();

    if (!data?.allProducts?.[0]) return null;

    return (
        <>
            <Product fragment={data.allProducts[0]} />
        </>
    );
};

export default ProductPage;
