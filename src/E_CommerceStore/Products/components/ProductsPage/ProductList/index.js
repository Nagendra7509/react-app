import React from "react";
import { observer } from "mobx-react";
import Product from "../Product";

@observer
class ProductList extends React.Component {

    render() {
        const { productList } = this.props;
        return (
            <div className="flex flex-wrap">
                    {productList.map(product=><Product key={Math.random()} product={product}/>)}
                </div>
        );
    }
}

export default ProductList;
