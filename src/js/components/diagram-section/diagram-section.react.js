/**
 * Created by ssge on 2016/3/25.
 */
import React, { PropTypes } from 'react';
import {Treebeard} from 'react-treebeard';
var _ = require('underscore');

const DiagramSection = React.createClass({
    getInitialState: function () {
        return null
    },
    componentDidUpdate: function () {
    },
    render: function () {
        return (
            <div className="eleven wide column diagram-section-wrapper">
                <div className="diagram-wrapper">
                    <div className="ui grid file-bar-wrapper">
                        <div className="file-wrapper">
                            homepage
                        </div>
                        <div className="file-wrapper">
                            eventpage
                        </div>
                        <div className="file-wrapper">
                            otherpage
                        </div>
                    </div>
                </div>
                <div>
                    console
                </div>
            </div>
        );
    }
});

export default DiagramSection;