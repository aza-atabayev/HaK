import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    errors: errorReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))