import React from "react";
import { observer } from "mobx-react";
import Product from "../Product";
import { ProductsContainer } from "./styledComponent";

@observer
class ProductList extends React.Component {

    render() {
        const { products, onClickAddToCart } = this.props;
        return (
            <ProductsContainer>
                    {products.map(product=><Product key={product.productId.toString()} onClickAddToCart={onClickAddToCart} product={product}/>)}
                </ProductsContainer>
        );
    }
}

export default ProductList;
