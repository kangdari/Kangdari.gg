import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Summoner from './Summoner';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/summoner/:summonerName" component={Summoner} />
    </Switch>
);

export default Routes;