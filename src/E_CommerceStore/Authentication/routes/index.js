import React from "react";
import { Route } from "react-router-dom";
import { SIGN_IN_PATH } from "../constants/routeConstants/RouteConstants";
import SignInPage from "../components/SignInPage/index";

export const authenticationRoutes = <Route path={SIGN_IN_PATH} component={SignInPage}/>;
