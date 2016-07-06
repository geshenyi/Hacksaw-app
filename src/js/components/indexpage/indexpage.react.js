/**
 * Created by ssge on 2016/3/25.
 */
var React = require('react');
var CreateButton = require('./createbutton.react');
var _ = require('underscore');

var IndexPage = React.createClass({
    render: function () {
        var generateButtonsView = function (eachButton, index) {
            return (
                <CreateButton buttonProps={eachButton} key={index}/>
            );
        };
        var buttons = [{'name': 'Create Repository', 'color': 'purple', 'path': '/create'}, {
            'name': 'Create Service',
            'color': 'pink',
            'path': '/template/create'
        }, {'name': 'Create Test', 'color': 'red', 'path': '/create'}];
        var buttonsView = [];
        _.each(buttons, function (eachButton, index) {
            buttonsView.push(generateButtonsView(eachButton, index));
        });
        return (
            <div className="light-grey-background index-page-wrapper">
                <div id="text-chooseone-wrapper">
                    Choose One To Create...
                </div>
                <div id="button-choose-wrapper" className="ui stackable centered three column grid container">
                    {buttonsView}
                </div>
            </div>
        );
    }
});

module.exports = IndexPage;