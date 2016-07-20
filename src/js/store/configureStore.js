/**
 * Created by ssge on 2016/7/12.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';


export default function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState);
}