/**
 * Created by ssge on 2016/3/24.
 */
var React = require('react');
var HeaderSection = React.createClass({
    render: function () {
        return (
            <div className="header">
                <div className="ui grid padded container">
                    <div className="column">
                        <div className="ui two column grid">
                            <div className="column"><img src="image/template-app.png" width="30px"/></div>
                            <div className="column">
                                <div id="word-riesling">Riesling</div>
                                <br/>
                                <div id="word-template">Template</div>
                            </div>
                        </div>
                    </div>

                    <div className="thirteen wide column center aligned">
                        Placeholder
                    </div>
                    <div className="two wide column">
                        <span>Hello, Chuck</span>
                        <div id="account-image"><img src="image/people.png" width="25px"/></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HeaderSection;