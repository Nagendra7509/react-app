import React from "react";

import { inject, observer } from "mobx-react";
import { SizesButtons, SizesLabel, SizeBtn } from "./styledComponent";

@inject("productStore")

@observer
class SizeFilter extends React.Component {

    onClickSelectSize = (event) => {
        const { onSelectSize } = this.props;
        onSelectSize(event.target.value);
    }

    render() {
        const { sizeFilter } = this.props;
        //console.log(sizeFilter);
        return (<SizesButtons>
                        <SizesLabel>Sizes:</SizesLabel>
                              <SizeBtn onClick={this.onClickSelectSize} isClicked={sizeFilter.indexOf('XS')!==-1} value="XS" >XS</SizeBtn>
                              <SizeBtn onClick={this.onClickSelectSize} isClicked={sizeFilter.indexOf('S')!==-1} value="S" >S</SizeBtn>
                              <SizeBtn onClick={this.onClickSelectSize} isClicked={sizeFilter.indexOf('M')!==-1} value="M" >M</SizeBtn>
                              <SizeBtn onClick={this.onClickSelectSize} isClicked={sizeFilter.indexOf('L')!==-1} value="L" >L</SizeBtn>
                              <SizeBtn onClick={this.onClickSelectSize} isClicked={sizeFilter.indexOf('XL')!==-1} value="XL" >XL</SizeBtn>
                              <SizeBtn onClick={this.onClickSelectSize} isClicked={sizeFilter.indexOf('XXL')!==-1} value="XXL" >XXL</SizeBtn>
                  </SizesButtons>);
    }
}
//isClicked={SizeFilter.indexOf('M')!==-1

export default SizeFilter;
