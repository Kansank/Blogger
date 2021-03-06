import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { postDetailsReducer, postListReducer } from './reducers/postReducers';


const initialState = {};
const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;