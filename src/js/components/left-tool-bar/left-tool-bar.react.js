/**
 * Created by ssge on 2016/3/25.
 */
import React, { PropTypes } from 'react';
var _ = require('underscore');

const LeftToolBar = React.createClass({
    handleMouseOver: function () {

    },
    render: function () {
        const {toolButtons, onToolButtonClick} = this.props;
        return (
            <div className="one column left-tool-bar">
                <div className="ui grid">
                    {toolButtons.map(button => (
                        <div className={"row tool-row " + (button.selected?'selected':'')} key={button.name} onClick={() => onToolButtonClick(button.name)}>
                            <div className="column">
                                <img src={button.image} className="tool-image"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
});

export default LeftToolBar;