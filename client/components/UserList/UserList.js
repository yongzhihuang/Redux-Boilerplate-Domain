import React from 'react';
import {Link} from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserListActions from './UserListActions';

// Component
const UserList = React.createClass({
    componentWillMount() {
      this.props.fetchUserList();
    },

    render() {
      let userList =(this.props.userList.status === 'loading' && !this.props.userList.users) ?
        <img src="http://i.imgur.com/TRl8EIl.gif"/> :
        this.props.userList.users.map((user, index) => {
            return <li key={index}user={user}>{user.name}</li>
        });

      return (
          <div className="app-wrapper">
            <h1>User List</h1>
            <ul>
              {userList}
            </ul>
          </div>
      )
    }
});

// Mappers
function mapStateToProps(state) {
    return {
      ...state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...UserListActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
