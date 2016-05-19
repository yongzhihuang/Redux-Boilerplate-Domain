import axios from 'axios';

export function fetchUserList() {
  return (dispatch) => {
    // Empty out any data that was there before we fetch
    dispatch({
      type: 'EMPTY_USER_LIST'
    });

    // ASYNC fetch to get data
    var request = axios.get('http://jsonplaceholder.typicode.com/users');
    request.then((data) => {
      dispatch({
          type: 'FETCH_USER_LIST',
          payload: data
      });
    });
  };

}
