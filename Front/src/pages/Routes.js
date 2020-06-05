import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Summoner from './Summoner/Summoner';
import Ranking from './Ranking/Ranking';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/summoner/:summonerName" component={Summoner} />
        <Route path="/ranking/" component={Ranking}/>
        {/* 라우트 추가 예정*/}
        {/* <Route path="/summoner/" component={Matchlist} /> */}
    </Switch>
);

export default Routes;