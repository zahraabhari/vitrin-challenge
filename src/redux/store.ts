import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import middleware from "./reduxMiddleware";

export default createStore(reducers, applyMiddleware(...middleware));
