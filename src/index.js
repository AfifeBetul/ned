import "materialize-css/dist/css/materialize.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./globalstate";
import App from "./pages/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
