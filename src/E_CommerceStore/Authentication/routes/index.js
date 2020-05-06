import React from "react";
import { Route } from "react-router-dom";
import { SIGN_IN_PATH } from "../constants/routeConstants/RouteConstants";
import { SignInRoute } from "./SignInRoute";
import { ProtectedRoute } from "../../../Common/ProtectedRoute/index";
export const authenticationRoutes = <Route path={SIGN_IN_PATH} component={SignInRoute}/>;

//export const authenticationRoutes = <ProtectedRoute path={SIGN_IN_PATH} component={SignInRoute}/>;
