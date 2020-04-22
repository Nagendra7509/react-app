import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (<nav>
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
          </ul>
        </nav>);
}
