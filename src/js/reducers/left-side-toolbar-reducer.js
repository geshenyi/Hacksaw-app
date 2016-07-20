/**
 * Created by ssge on 2016/7/12.
 */
import {cloneObjectWithProp} from '../util/object-util'
const initButtons = [{
    'name': 'PAGE',
    'image': 'image/programming-code.png',
    'selected': true
}, {
    'name': 'FLOW',
    'image': 'image/tree-structure.png',
    'selected': false
}];

const toolButtons = (state = initButtons, action) => {
    switch (action.type) {
        case 'CLICK_BUTTON':
            return state.map((button, index) => {
                    if(button.name == action.name) {
                        return cloneObjectWithProp(button, 'selected', true);
                    }else {
                        return cloneObjectWithProp(button, 'selected', false);
                    }
                });
        case 'COLLAPSE_NAVIGATOR':
            return state.map((button) => {
                    return cloneObjectWithProp(button, 'selected', false);
            });
        default:
            return state;
    }
};

export default toolButtons