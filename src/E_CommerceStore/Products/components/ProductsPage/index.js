import React from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import LoadingWrapperWithFailure from "../../../../Common/LoadingWrapper/LoadingWrapperWithFailure/index";
import NoDataView from "../../../../Common/LoadingWrapper/NoDataView/index";
import ProductCart from "../../../Cart/components/ProductCart/index";
import { getAccessToken } from "../../../Authentication/utils/StorageUtils";
import SizeFilter from "./SizeFilter/index";
import Header from "./Header/index";
import ProductList from "./ProductList";
import { E_CommerceStore_App, HeaderPart, FilterAndProducts, SortFilterAndProducts, SignOutBtn } from "./styledComponent";


@inject("authStore")
@inject("productStore")
@inject('cartStore')

@observer
class ProductsPage extends React.Component {

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
        const {
            getProductListAPIStatus,
            getProductListAPIError,
            sizeFilter,
            onChangeSortBy,
            onSelectSize,
            totalNoOfProductsDisplayed
        } = this.props.productStore;

        if (getAccessToken()) {
            return (<E_CommerceStore_App>
                    <HeaderPart>
                        <SignOutBtn onClick={this.onClickSignout}>sigout</SignOutBtn>
                        <ProductCart/>
                    </HeaderPart>
                    <FilterAndProducts>
                        <SizeFilter onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                        <SortFilterAndProducts>
                              <Header totalNoOfProductsDisplayed={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy}/>
                              <LoadingWrapperWithFailure
                                apiStatus={getProductListAPIStatus}
                                apiError={getProductListAPIError}
                                onRetryClick={this.doNetWorkCall}
                                renderSuccessUI={this.renderUserList}
                              />
                        </SortFilterAndProducts>
                    </FilterAndProducts>
                    <CookieConsent>
                        This website uses cookies to enhance the user experience.
                    </CookieConsent>
                </E_CommerceStore_App>);
        }

        return (
            <Redirect to ={{pathname:'/ecommerce-store/sign-in/'}}/>
        );
    }
}

export default ProductsPage;
