// Import css
import css from './styles/main.scss';

// Import Router
// import router from 'router';

import React from 'react';
import { render } from 'react-dom';

// Import Components
import Main from './components/Main';
import AppWrapper from './components/AppWrapper';
import UserList from './components/UserList/UserList';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={AppWrapper}></IndexRoute>
        <Route path="/users" component={UserList}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
