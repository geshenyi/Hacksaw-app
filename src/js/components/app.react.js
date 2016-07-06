/**
 * Created by ssge on 2016/3/24.
 */
var React = require('react');
var Header = require('./header/header.react');
var Footer = require('./footer/footer.react');

var RieslingTemplateAPP = React.createClass({
    render: function () {
        return (
            <div className="app-wrapper">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
});

module.exports = RieslingTemplateAPP;