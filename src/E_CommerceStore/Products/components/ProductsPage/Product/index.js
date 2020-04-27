import React from "react";
import { observer, inject } from "mobx-react";

import { ProductCard, FreeShipping, ProductImg, ProductTitle, YelloWDash, Price, CurrencyFormat, PriceValue, Installments, AddToCartBtn } from "./styledComponent";

@inject('cartStore')

@observer
class Product extends React.Component {

    onClickAddToCart = () => {

        const { onClickAddToCart } = this.props.cartStore;
        onClickAddToCart(parseInt(event.target.id, 10));

    }

    render() {
        const { product } = this.props;
        return (<ProductCard id={product.id}>
                    {product.isFreeShipping?<FreeShipping>Free shipping</FreeShipping>:null}
                    <ProductImg src={product.imageURL} alt="Cat Tee Black T-Shirt"/>
                    <ProductTitle >{product.title}</ProductTitle>
                    <YelloWDash className="w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4"></YelloWDash>
                    <Price><CurrencyFormat>{product.currencyFormat}</CurrencyFormat><PriceValue >{Math.round(product.price)}</PriceValue>.{(product.price).toString().slice(-2)}</Price>
                    <Installments>{product.installmentsCount==0?null:`or ${product.installmentsCount} x ${product.currencyFormat}${(product.price/product.installmentsCount).toFixed(2)}`}</Installments>
                    <AddToCartBtn id={product.productId} onClick={this.onClickAddToCart} >Add to cart</AddToCartBtn>
                </ProductCard>);
    }
}

export default Product;
