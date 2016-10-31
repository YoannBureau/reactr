import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './views/shared/layout.jsx'
import Home from './views/common/home.jsx'
import About from './views/common/about.jsx'
import Users from './views/user/users.jsx'
import User from './views/user/user.jsx'

class Application extends React.Component {
    render(){
        return (
            <Router history={hashHistory}>
                <Route component={Layout}>
                    <Route path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/users/:id" component={User} />
                    <Route path="/about" component={About} />
                </Route>
            </Router>
        )
    }
}

export default Application;