/**
 * Created by ssge on 2016/3/25.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var CreateButton = React.createClass({
    render: function () {
        var className = 'ui ' + this.props.buttonProps.color + ' button create-button';
        return (
            <div className="five wide column">
                <Link to={this.props.buttonProps.path}><button className={className}>{this.props.buttonProps.name}</button></Link>
            </div>
        );
    }
});

module.exports = CreateButton;