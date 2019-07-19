import React  from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './containers/login/index'
import Register from './containers/regisiter/index'

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route component={Login}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'))