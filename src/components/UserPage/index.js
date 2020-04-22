import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure/index.js";
import NoDataView from "../common/NoDataView/index.js";

@inject("userStore")

@observer
class UserPage extends Component {

    componentDidMount() {

        this.doNetWorkCalls();

    }

    getStores = () => {

        return this.props.userStore;

    }

    doNetWorkCalls = () => {

        this.getStores().getUsersAPI();

    }

    renderUserList = () => {

        const { users } = this.getStores();
        if (users.length === 0) {
            return <NoDataView/>;
        }
        return users.map((userName) => <div key={userName}>{userName}</div>);

    }

    render() {

        const { getUsersApiStatus, getUsersApiError } = this.getStores();
        return (
            <LoadingWrapperWithFailure
                apiError={getUsersApiError}
                apiStatus={getUsersApiStatus}
                onRetryClick={this.doNetWorkCalls}
                renderSuccessUI={this.renderUserList}
            />
        );

    }
}

export default UserPage;
