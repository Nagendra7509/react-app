import React from "react";
import { observer } from "mobx-react";
import { SubTotalDiv, SubTotalText, TotalAmount } from "./styledComponent";

@observer
class SubTotal extends React.Component {

    render() {
        const { totalCartAmount } = this.props;
        return (<SubTotalDiv>
                    <SubTotalText>SUBTOTAL</SubTotalText>
                    <TotalAmount>₹ {totalCartAmount}</TotalAmount>
                 </SubTotalDiv>);
    }
}


export default SubTotal;
