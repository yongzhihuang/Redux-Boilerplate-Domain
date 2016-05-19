// Reducer for userList
// Note: The name of the function must be the SAME as the prop we expect when accessing it later in the component

function userList(state = [], action) {
    switch(action.type) {
        case 'FETCH_USER_LIST':
          if (action.payload && action.payload.data) {
            const userList = action.payload.data;
            return {
              status: action.status,
              users: [ ...userList ]
            }
          }
        default:
            return state;
    }
}

export default userList;
