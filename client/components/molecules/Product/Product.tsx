import { ProductFragment } from '../../../generated/graphql';
import ProductActions from '../ProductActions/ProductActions';

export interface ProductProps {
    fragment: ProductFragment;
}

const Product = ({ fragment }: ProductProps) => {
    return (
        <>
            {fragment.name} <ProductActions fragment={fragment} />
        </>
    );
};

export default Product;
