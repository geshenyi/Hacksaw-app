/**
 * Created by ssge on 2016/7/12.
 */
import {cloneObjectWithProp} from '../util/object-util'
const initNavItems = {
    items: {
        name: 'Page',
        toggled: true,
        children: [
            {
                name: 'domain-catalog',
                children: [
                    {name: 'com.stubhub.domain.catalog', children: [{name: 'catalog page1'}, {name: 'catalog page2'}]},
                    {
                        name: 'com.stubhub.domain.catalogv2',
                        children: [{name: 'catalogv2 page1'}, {name: 'catalogv2 page2'}]
                    }
                ]
            },
            {
                name: 'domain-inventory',
                children: [
                    {
                        name: 'com.stubhub.domain.inventory',
                        children: [{name: 'inventory page1'}, {name: 'inventory page2'}]
                    }
                ]
            },
            {
                name: 'domain-checkout',
                children: [
                    {
                        name: 'com.stubhub.domain.checkout',
                        children: [{name: 'checkout page1'}, {name: 'checkout page2'}]
                    }
                ]
            }
        ]
    },
    pageItems: {
        name: 'Page',
        toggled: true,
        children: [
            {
                name: 'domain-catalog',
                children: [
                    {name: 'com.stubhub.domain.catalog', children: [{name: 'catalog page1'}, {name: 'catalog page2'}]},
                    {
                        name: 'com.stubhub.domain.catalogv2',
                        children: [{name: 'catalogv2 page1'}, {name: 'catalogv2 page2'}]
                    }
                ]
            },
            {
                name: 'domain-inventory',
                children: [
                    {
                        name: 'com.stubhub.domain.inventory',
                        children: [{name: 'inventory page1'}, {name: 'inventory page2'}]
                    }
                ]
            },
            {
                name: 'domain-checkout',
                children: [
                    {
                        name: 'com.stubhub.domain.checkout',
                        children: [{name: 'checkout page1'}, {name: 'checkout page2'}]
                    }
                ]
            }
        ]
    },
    flowItems: {
        name: 'Flow',
        toggled: true,
        children: [
            {
                name: 'domain-catalog',
                children: [
                    {name: 'com.stubhub.domain.catalog', children: [{name: 'catalog page1'}, {name: 'catalog page2'}]},
                    {
                        name: 'com.stubhub.domain.catalogv2',
                        children: [{name: 'catalogv2 page1'}, {name: 'catalogv2 page2'}]
                    }
                ]
            },
            {
                name: 'domain-inventory',
                children: [
                    {
                        name: 'com.stubhub.domain.inventory',
                        children: [{name: 'inventory page1'}, {name: 'inventory page2'}]
                    }
                ]
            },
            {
                name: 'domain-checkout',
                children: [
                    {
                        name: 'com.stubhub.domain.checkout',
                        children: [{name: 'checkout page1'}, {name: 'checkout page2'}]
                    }
                ]
            }
        ]
    }
};

function findNavNode(node, tree, result) {
    if (tree.name == node.name) {
        result.tree = tree;
    } else {
        if (tree.children) {
            tree.children.forEach(function (eachChild) {
                findNavNode(node, eachChild, result);
            })
        }
    }
}

function toggleNavItem(node, toggled, state) {
    var newState = Object.assign({}, state);
    var nodeHolder = {};
    if (newState.cursor) {
        newState.cursor.active = false;
    }
    findNavNode(node, newState.items, nodeHolder);
    nodeHolder.tree.active = true;
    if (nodeHolder.tree.children) {
        nodeHolder.tree.toggled = toggled;
    }
    return Object.assign({}, newState, {cursor: nodeHolder.tree})
}

function changeNavType(typeName, state) {
    if(typeName == 'PAGE'){
        return Object.assign({}, state, {items: state.pageItems});
    }else {
        return Object.assign({}, state, {items: state.flowItems});
    }
}

const navItems = (state = initNavItems, action) => {
    switch (action.type) {
        case 'CLICK_NAVIGATOR_ITEM':
            return toggleNavItem(action.node, action.toggled, state);
        case 'CHANGE_NAV_TYPE':
            return changeNavType(action.typeName, state);
        default:
            return state;
    }
};

export default navItems