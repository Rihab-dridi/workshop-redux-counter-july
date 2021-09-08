import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { CounterReducer } from "./redux/reducer";
import { Provider } from "react-redux";

const storeCounter = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeCounter}>
    <App />
  </Provider>,
  document.getElementById("root")
);
