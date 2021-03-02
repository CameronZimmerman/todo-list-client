import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Home from './Home/Home.js';
import LoginPage from './Auth/LoginPage.js';
import signUpPage from './Auth/signUpPage.js';
import ListPage from './ListPage/ListPage.js';
import ProtectedRoute from './Components/ProtectedRoute.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <signUpPage {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <LoginPage {...routerProps} />} 
                        />
                        <ProtectedRoute 
                          path="/todo" 
                          exact
                          render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}