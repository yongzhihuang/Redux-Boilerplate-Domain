import React from 'react';
import {Link} from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserListActions from './UserListActions';

const UserList = React.createClass({

    componentWillMount() {
      // const {username} = this.props.params;
      this.props.fetchUserList();
    },

    render() {
      // let userList =(this.props.users && (this.props.users.length === 0 || this.props.users.length === 1)) ?
      //   <h1>Loading...</h1> :
      //   this.props.users.map((user, index) => {
      //       return <li key={index}user={user}>{user.name}</li>
      //   });
      let userList = <h1>HI</h1>
      console.log(this.props);

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


function mapStateToProps(state) {
    return {
      userList: state.usersList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...UserListActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

// in Product.js
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as UserListActions from './UserListActions';

// // component part
// export function UserList({ name, description }) {
//     return <div>
//         <h1>{ name }</h1>
//         <div className="description">
//             {description}
//         </div>
//     </div>
// }

// // container part
// function mapStateToProps(state) {
//     return {...state};
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         ...UserListActions,
//     }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
