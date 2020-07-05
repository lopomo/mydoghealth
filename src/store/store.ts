import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
