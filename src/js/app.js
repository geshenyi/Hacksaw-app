/**
 * Created by ssge on 2016/3/22.
 */
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var RieslingTemplateAPP = require('./components/app.react');
var indexPage = require('./components/indexpage/indexpage.react');
var CreateRepositoryPage = require('./components/create-repository-page/create-repository-page.react');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/template" component={RieslingTemplateAPP}>
            <IndexRoute component={indexPage}/>
            <Route path="create" component={CreateRepositoryPage}/>
        </Route>
        <Route path="/template1" component={RieslingTemplateAPP}>
            <IndexRoute component={indexPage}/>
            <Route path="create" component={CreateRepositoryPage}/>
        </Route>
    </Router>
),document.getElementById("appRoot"));