/**
 * Created by ssge on 2016/7/18.
 */
export const clickNavigatorItem = (node, toggled) => {
    return {
        type: 'CLICK_NAVIGATOR_ITEM',
        node,toggled
    }
};

export const changeNavType = (typeName) => {
    return {
        type: 'CHANGE_NAV_TYPE',
        typeName
    }
};