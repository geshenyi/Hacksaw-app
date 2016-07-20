/**
 * Created by ssge on 2016/7/12.
 */
import { combineReducers } from 'redux';
import toolButtons from './left-side-toolbar-reducer';
import navItems from './navigator-reducer'

const rootReducer = combineReducers({
   toolButtons, navItems
});

export default rootReducer;