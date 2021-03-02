import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import Home from './Home/Home.js'
import LoginPage from './Auth/LoginPage.js'
import SignUpPage from './Auth/SignUpPage.js'
import ListPage from './ListPage/ListPage.js'
import ProtectedRoute from './Components/ProtectedRoute.js'
import Header from './Components/Header.js'
import {getToken} from './local-storage-utils.js'

export default class App extends Component {
    state = {token: ''}

    componentDidMount() {
      const token = getToken();
      this.setState({token})
    }

    handleTokenChange = (token) => {this.setState({token})}

    render() {
      console.log(this.state);
        const {token} = this.state;
        return (
            <div>
                <Router>
                <Header  token = {token}/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps}/>} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUpPage {...routerProps} handleTokenChange = {this.handleTokenChange}/>} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <LoginPage {...routerProps} />} 
                        />
                        <ProtectedRoute 
                          path="/todos" 
                          exact
                          token = {token}
                          render={(routerProps) => <ListPage {...routerProps}  token = {token}/>} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}