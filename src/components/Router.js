import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import NotFound from './NotFound';
import App from './../App';

function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route path="/store/:storeId" component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;