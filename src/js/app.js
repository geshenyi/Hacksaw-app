/**
 * Created by ssge on 2016/3/22.
 */
//var React = require('react');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import HacksawAPP from './components/app.react';
import indexPage from './containers/indexpage/indexpage.react';
import CreateRepositoryPage from './components/create-repository-page/create-repository-page.react'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/hacksaw" component={HacksawAPP}>
                <IndexRoute component={indexPage}/>
                <Route path="create" component={CreateRepositoryPage}/>
            </Route>
            <Route path="/template1" component={HacksawAPP}>
                <IndexRoute component={indexPage}/>
                <Route path="create" component={CreateRepositoryPage}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("appRoot"));