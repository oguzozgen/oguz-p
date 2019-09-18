import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IntroCardComp from '../components/introCardComp/IntroCardComp';
import SkillsetCardComp from '../components/skillsetCardComp/SkillsetCardComp';

const routes = [
    {
        path: '/skillset',
        component: SkillsetCardComp
    },
    {
        path: '/',
        component: IntroCardComp
    }
];

export const Routes = () => {
    return (
        <div>
            <Switch>
                {routes.map((route, index) => <Route path={route.path} component={route.component} key={index} />)}
            </Switch>
        </div>
    );
};