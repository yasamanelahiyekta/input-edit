import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { number, posts } from "./Reducer";
import thunk from "redux-thunk";
const reducers = combineReducers({ number, posts })
const middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))
export default store