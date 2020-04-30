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
        return (<SizesButtons>
                        <SizesLabel>Sizes:</SizesLabel>
                            <SizeBtn 
                                onClick={this.onClickSelectSize} 
                                isClicked={sizeFilter.includes('XS')} 
                                value="XS" >XS
                            </SizeBtn>
                            <SizeBtn 
                                onClick={this.onClickSelectSize} 
                                isClicked={sizeFilter.includes('S')} 
                                value="S" >S
                            </SizeBtn>
                            <SizeBtn 
                                onClick={this.onClickSelectSize} 
                                isClicked={sizeFilter.includes('M')} 
                                value="M" >M
                            </SizeBtn>
                            <SizeBtn 
                                onClick={this.onClickSelectSize} 
                                isClicked={sizeFilter.includes('L')} 
                                value="L" >L
                            </SizeBtn>
                            <SizeBtn 
                                onClick={this.onClickSelectSize} 
                                isClicked={sizeFilter.includes('XL')} 
                                value="XL" >XL
                            </SizeBtn>
                            <SizeBtn 
                                onClick={this.onClickSelectSize} 
                                isClicked={sizeFilter.includes('XXL')} 
                                value="XXL" >XXL
                            </SizeBtn>
                  </SizesButtons>);
    }
}

export default SizeFilter;

//isClicked={sizeFilter.indexOf('XS')!==-1}
