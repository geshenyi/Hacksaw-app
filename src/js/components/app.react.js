/**
 * Created by ssge on 2016/3/24.
 */
import React from 'react';
import Header from './header/header.react';
import Footer from './footer/footer.react';

var RieslingHacksawAPP = React.createClass({
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

export default RieslingHacksawAPP;