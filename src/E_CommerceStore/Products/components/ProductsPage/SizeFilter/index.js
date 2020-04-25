import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { inject, observer } from "mobx-react";

//@inject("productStore")

@observer
class SizeFilter extends React.Component {

    onClickSelectSize = (event) => {
        const { onSelectSize } = this.props;
        onSelectSize(event.target.value);
    }

    render() {
        return (
            <div className="w-1/4 px-4">
                <p className="my-4 font-bold">Sizes:</p>
                <button onClick={this.onClickSelectSize} value="XS" className="rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop bg-gray-200 text-black">XS</button>
                <button onClick={this.onClickSelectSize} value="S" className="rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop bg-gray-200 text-black">S</button>
                <button onClick={this.onClickSelectSize} value="M" className="rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop bg-gray-200 text-black">M</button>
                <button onClick={this.onClickSelectSize} value="L" className="rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop bg-gray-200 text-black">L</button>
                <button onClick={this.onClickSelectSize} value="XL" className="rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop bg-gray-200 text-black">XL</button>
                <button onClick={this.onClickSelectSize} value="XXL" className="rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop bg-gray-200 text-black">XXL</button>
            </div>
        );
    }
}

export default SizeFilter;
