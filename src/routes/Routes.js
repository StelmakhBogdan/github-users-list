import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import UsersList from '../containers/UsersList/UsersList';
import UserDetails from '../containers/UserDetails/UserDetails';

export default () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/users' component={UsersList}/>
        <Route exact path='/user/:name' component={UserDetails}/>
        <Route exact path='/' component={() => (<Redirect to="/users"/>)}/>
      </Switch>
    </Router>
    );
};