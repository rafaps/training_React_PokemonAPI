import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" component={Dashboard}/>
        </Switch>


    )

};

export default Routes;
