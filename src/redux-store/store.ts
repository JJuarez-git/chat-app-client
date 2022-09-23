import { combineReducers, createStore, applyMiddleware } from "redux";
import socialReducer from '../components/social/redux/reducer';
import logger from "redux-logger";

const rootReducer = combineReducers({
    SOCIAL: socialReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store