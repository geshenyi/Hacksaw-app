/**
 * Created by ssge on 2016/3/25.
 */
import React from 'react';
import { connect } from 'react-redux';
import CreateButton from './../../components/indexpage/createbutton.react';
import LeftToolBar from '../../components/left-tool-bar/left-tool-bar.react';
import Navigator from '../../components/navigator/navigator.react';
import DiagramSection from '../../components/diagram-section/diagram-section.react'
import {clickSidebarButton, clickCollapseButton} from '../../actions/index';
import {clickNavigatorItem, changeNavType} from '../../actions/navigator'
import _ from 'underscore';

const IndexPage = React.createClass({
    render: function () {
        const {toolButtons, onToolButtonClick, onCollapseButtonClick, navItems, onNavItemClick} = this.props;
        return (
            <div className="index-page-wrapper ui grid">
                <LeftToolBar toolButtons={toolButtons} onToolButtonClick={onToolButtonClick}/>
                <Navigator toolButtons={toolButtons} onCollapseButtonClick={onCollapseButtonClick}
                           navItems={navItems}
                           onNavItemClick={onNavItemClick}/>
                <DiagramSection />
            </div>
        );
    }
});

const mapStateToProps = (state) => {
    return {
        toolButtons: state.toolButtons,
        navItems: state.navItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToolButtonClick: (name) => {
            dispatch(clickSidebarButton(name));
            dispatch(changeNavType(name));
        },
        onCollapseButtonClick: () => {
            dispatch(clickCollapseButton());
        },
        onNavItemClick: (node, toggled) => {
            dispatch(clickNavigatorItem(node, toggled))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);