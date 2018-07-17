import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from './components/Home/Home'

export default () => (

    <BrowserRouter>
        {/*<Header/>*/}
            <Route exact path="/" component={Home} />
            {/*<Route path="/login" component={Login}/>*/}

        {/*<Footer/>*/}
    </BrowserRouter>

);
