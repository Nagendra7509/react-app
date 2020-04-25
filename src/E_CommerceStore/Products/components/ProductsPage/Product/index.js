import React from "react";
import { observer } from "mobx-react";

@observer
class Product extends React.Component {

    render() {
        const { product } = this.props;
        console.log(product);
        return (<div class="flex flex-col  border border-transparent border-solid md:w-46 lg:w-30 xl:w-22 m-2 items-center p-2 relative" id="12">
                    {product.isFreeShipping?<p class="absolute top-10 right-0 bg-black p-1 text-xs text-white">Free shipping</p>:null}
                    <img src={product.imageURL} alt="Cat Tee Black T-Shirt" class="w-4/5 object-contain mb-2"/>
                    <p class="h-45px text-center">{product.title}</p>
                    <div class="w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4"></div>
                    <p><span class="text-xs mr-1">{product.currencyFormat}</span><span class="text-xl">{product.price}</span></p>
                        <p class="text-sm text-gray-700 mb-4 h-5">or {product.installmentsCount} x {product.currencyFormat}{(product.price/product.installmentsCount).toFixed(2)}</p>
                        <button class="w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none">Add to cart</button>
                </div>);
    }
}

export default Product;
