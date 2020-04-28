import React from "react";
import { Link, Redirect } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react"

@observer
export default class Home extends React.Component {

  render() {

    return ((<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li> 
            <li>
              <Link to="/todoslist">TodosList</Link>
            </li>
            <li>
              <Link to="/countriesList">countriesStatus</Link>
            </li>
            <li>
              <Link to="/contriesDashboardApp">ContriesDashBoardApp</Link>
            </li>
            <li>
              <Link to="/mobx-todo-app">TodosList-Mobx</Link>
            </li>
            <li>
              <Link to="/grid-game">Grid Memory Game</Link>
            </li>
            <li>
              <Link to="/practice">Hands on(LoadingWrapperWithFailure)</Link>
            </li>
            <li>
              <Link to="/todoListNetworkCalls">Todo-List_WithNetworkCalls </Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/ecommerce-store/sign-in/">SignInPage</Link>
            </li>
          </ul>
        </nav>
      </div>));
  }
}
