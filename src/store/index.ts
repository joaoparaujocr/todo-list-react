import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./modules/userToken/reducer";

const reducers = combineReducers({ user: userReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;