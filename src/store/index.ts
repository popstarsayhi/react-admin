import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import handleNum from "./num-status/reducer"
import handleArr from "./arr-status/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    handleNum,
    handleArr
})


const store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store