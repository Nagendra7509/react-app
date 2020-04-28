import React from "react";
import { observer } from "mobx-react";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ProductCard,
    FreeShipping,
    ProductImg,
    ProductTitle,
    YelloWDash,
    Price,
    CurrencyFormat,
    PriceValue,
    Installments,
    AddToCartBtn
}
from "./styledComponent";



@observer
class Product extends React.Component {

    onClickAddToCart = () => {

        toast.warn("Product added to your cart! ", {
            position: toast.POSITION.BOTTOM_CENTER,
            boxShadow: "0px",
        });

        const { onClickAddToCart } = this.props;
        onClickAddToCart(parseInt(event.target.id, 10));

    }

    render() {
        const { product } = this.props;
        return (<ProductCard id={product.id}>
                    {product.isFreeShipping?<FreeShipping>Free shipping</FreeShipping>:null}
                    <ProductImg src={product.imageURL} alt="Cat Tee Black T-Shirt"/>
                    <ProductTitle >{product.title}</ProductTitle>
                    <YelloWDash></YelloWDash>
                    <Price><CurrencyFormat>{product.currencyFormat}</CurrencyFormat><PriceValue >{Math.round(product.price)}</PriceValue>.{(product.price).toString().slice(-2)}</Price>
                    <Installments>{product.installmentsCount==0?null:`or ${product.installmentsCount} x ${product.currencyFormat}${(product.price/product.installmentsCount).toFixed(2)}`}</Installments>
                    <AddToCartBtn id={product.productId} onClick={this.onClickAddToCart} >Add to cart</AddToCartBtn>
                    <ToastContainer hideProgressBar={true} autoClose={3000} closeButton={false} transition={Slide}/>
                </ProductCard>);
    }
}

export default Product;
