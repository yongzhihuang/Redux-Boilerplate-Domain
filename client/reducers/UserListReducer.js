// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

function UserListReducer(state = [], action) {
    switch(action.type) {
        case 'EMPTY_USER_LIST':
          return [
            []
          ]
        case 'FETCH_USER_LIST':
          const userList = action.payload.data;

          return [
            {name: Math.random()},
            ...userList
          ]
        default:
            return state;
    }
}

export default UserListReducer;
