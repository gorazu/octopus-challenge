import { ProductFragment } from '../../../generated/graphql';
import ProductQuantity from '../../atoms/ProductQuantity/ProductQuantity';

export interface ProductProps {
    fragment: ProductFragment;
}

const Product = ({ fragment }: ProductProps) => {
    return (
        <>
            {fragment.name} <ProductQuantity fragment={fragment} />
        </>
    );
};

export default Product;
