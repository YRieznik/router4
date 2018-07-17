import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from './components/Home/Home';
import Login from './components/Login/Login';

export default () => (

    <BrowserRouter>
        {/*<Header/>*/}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
        </Switch>
        {/*<Footer/>*/}
    </BrowserRouter>

);
