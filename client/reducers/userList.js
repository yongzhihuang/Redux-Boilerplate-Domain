// Reducer for userList
// Note: The name of the function must be the SAME as the prop we expect when accessing it later in the component

function userList(state = [], action) {
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

export default userList;
