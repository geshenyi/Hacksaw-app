/**
 * Created by ssge on 2016/3/24.
 */
import React from 'react';
var HeaderSection = React.createClass({
    componentDidMount: function () {
        console.log('Header mounted');
    },
    render: function () {
        return (
            <div className="hacksaw-header">
                <div className="ui grid">
                    <div className="two wide column">
                        <div className="ui grid">
                            <div className="three wide column">
                                <img src="image/hacksaw.png" width="30px"/>
                            </div>
                            <div className="eight wide column" id="word-title-wrapper">
                                <div id="word-title">Hacksaw</div>
                            </div>
                        </div>
                    </div>
                    <div className="right floated two wide column text-right-aligned">
                        <span>Hello, Chuck</span>
                        <div id="account-image"><img src="image/people.png" width="30px"/></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HeaderSection;