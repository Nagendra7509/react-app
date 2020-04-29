import React from "react";
import { observer } from "mobx-react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCheckCircle } from 'react-icons/bs';
import { IconContext } from "react-icons";
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
    AddToCartBtn,
    Toaster,
    ToastMessage
}
from "./styledComponent";


@observer
class Product extends React.Component {

    onClickAddToCart = () => {

        toast.warn(
            <IconContext.Provider value={{ color: "green", className: "text-3xl" }}>
                <Toaster>
                    <BsCheckCircle />
                    <ToastMessage> Product added to your cart!</ToastMessage>
                </Toaster>
            </IconContext.Provider>);

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
                    <Price>
                        <CurrencyFormat>{product.currencyFormat}</CurrencyFormat>
                        <PriceValue >{Math.round(product.price)}</PriceValue>
                        .{(product.price).toString().slice(-2)}
                    </Price>
                    <Installments>
                        {product.installmentsCount==0?
                            null
                            :
                            `or ${product.installmentsCount} x ${product.currencyFormat}${(product.price/product.installmentsCount).toFixed(2)}`}
                    </Installments>
                    <AddToCartBtn 
                        id={product.productId} 
                        onClick={this.onClickAddToCart} >Add to cart
                    </AddToCartBtn>
                    
                </ProductCard>);
    }
}

export default Product;
