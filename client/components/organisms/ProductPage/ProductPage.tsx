import { useProductsQuery } from '../../../generated/graphql';

const ProductPage = () => {
    const { loading, data } = useProductsQuery();

    console.log(loading, data);

    return (
        <>
            <div>Product page</div>
        </>
    );
};

export default ProductPage;
