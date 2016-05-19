import React from 'react';
import {Link} from 'react-router';

const AppWrapper = React.createClass({
    render() {
      return (
          <div className="app-wrapper">
            <h1><Link to="/users">Fetch Users Async</Link></h1>
          </div>
      )
    }
});

export default AppWrapper;
