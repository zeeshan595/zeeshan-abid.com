import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./View/App.connect";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, AnyAction } from "redux";
import { createEpicMiddleware } from "redux-observable";
import logger from "redux-logger";
import { RootEpic, RootReducer } from "./Controller/Root";
import "Style.scss";

const epicMiddleware = createEpicMiddleware<AnyAction>();
const middleware = [];
if (process.env.NODE_ENV == "development") {
  middleware.push(logger);
}
middleware.push(epicMiddleware);

const store = createStore(
  RootReducer,
  applyMiddleware(...middleware)
);
epicMiddleware.run(RootEpic);

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById("app"));  