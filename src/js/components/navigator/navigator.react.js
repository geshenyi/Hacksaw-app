/**
 * Created by ssge on 2016/3/25.
 */
import React, { PropTypes } from 'react';
import {Treebeard} from 'react-treebeard';
var _ = require('underscore');

const Navigator = React.createClass({
    componentDidUpdate: function () {
        function anyToolButtonSelected(buttons) {
            return _.some(buttons, function (button) {
                return button.selected;
            })
        }

        console.log(this.props);
        if (anyToolButtonSelected(this.props.toolButtons)) {
            $('.navigator').fadeIn();
        } else {
            $('.navigator').fadeOut();
        }
    },
    onToggle(node, toggled){
        if (this.state.cursor) {
            this.state.cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({cursor: node});
    },
    render: function () {
        const {toolButtons, onCollapseButtonClick, navItems, onNavItemClick} = this.props;
        return (
            <div className="four wide column navigator">
                <div className="ui grid">
                    <div className="fourteen wide column no-padding">
                        <div className="ui icon input full-width">
                            <input type="text" placeholder="Search..."/>
                            <i className="inverted circular search link icon"></i>
                        </div>
                    </div>
                    <div className="two wide column no-padding" id="navigator-collapse-icon-wrapper"
                         onClick={onCollapseButtonClick}>
                        <i className="inverted fitted circular caret left link grey icon"></i>
                    </div>
                </div>
                <div className="ui grid treebeard-wrapper">
                    <Treebeard data={navItems.items} onToggle={onNavItemClick}></Treebeard>
                </div>
            </div>
        );
    }
});

export default Navigator;