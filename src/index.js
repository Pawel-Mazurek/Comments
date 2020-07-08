import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { Provider } from "react-redux";
import store from "./redux/store";
import CommentsViewComponent from "./components/CommentsComponent.js";
import ChoosenCommentsViewComponent from "./components/ChoosenCommentsComponent";
import AddCommentsViewComponent from "./components/AddCommentsComponent";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={CommentsViewComponent} />
      <Route
        path="/ChoosenCommentsViewComponent"
        component={ChoosenCommentsViewComponent}
      />
      <Route
        path="/AddCommentsViewComponent"
        component={AddCommentsViewComponent}
      />
    </Router>
  </Provider>,
  document.getElementById("root")
);
