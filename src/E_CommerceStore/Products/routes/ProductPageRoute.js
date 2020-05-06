import React from "react";
import { observer, inject } from "mobx-react";
import ProductsPage from "../components/ProductsPage/index";
import ProductList from "../components/ProductsPage/ProductList/index";
//import { getAccessToken } from "../../Authentication/utils/StorageUtils";

@inject("authStore")
@inject("productStore")
@inject('cartStore')


@observer
class ProductPageRoute extends React.Component {

    componentDidMount() {
        this.doNetworkCall();
    }


    doNetworkCall = () => {
        this.props.productStore.getProductList();
    }

    onClickSignout = () => {
        this.props.authStore.userSignOut();
        const { history } = this.props;
        history.replace('/ecommerce-store/sign-in/');
    }

    renderUserList = observer(() => {
        const { products } = this.props.productStore;
        const { onClickAddToCart } = this.props.cartStore;
        if (products === 0) {
            return <NoDataView/>;
        }
        return <ProductList products={products}  onClickAddToCart={onClickAddToCart}/>;

    })

    render() {

        return <ProductsPage
                onClickSignout={this.onClickSignout}
                renderUserList={this.renderUserList}
                onRetryClick={this.doNetworkCall}
                />;

        // return (
        //     <Redirect to ={{pathname:'/ecommerce-store/sign-in/'}}/>
        // );

    }
}

export { ProductPageRoute };
