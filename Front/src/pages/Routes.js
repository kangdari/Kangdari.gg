import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Summoner from './Summoner/Summoner';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/summoner/:summonerName" component={Summoner} />
        {/* 라우트 추가 예정*/}
        {/* <Route path="/summoner/" component={Matchlist} /> */}
    </Switch>
);

export default Routes;