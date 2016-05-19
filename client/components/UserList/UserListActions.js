import axios from 'axios';

// Can be in separate folders

export function fetchUserList() {
  // Empty out any data that was there before we fetch

  var request = axios.get('http://jsonplaceholder.typicode.com/users');
  return (dispatch) => {
    dispatch({
      type: 'EMPTY_USER_LIST'
    });

    request.then((data) => {
      dispatch({
          type: 'FETCH_USER_LIST',
          payload: data
      });
    });
  };

}
