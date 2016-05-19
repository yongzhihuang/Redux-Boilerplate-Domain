import axios from 'axios';

export function fetchUserList() {
  return (dispatch) => {
    // Set loading state and empty out any data that was there before we fetch
    dispatch({
      type: 'FETCH_USER_LIST',
      status: 'loading'
    });

    // ASYNC fetch to get data
    var request = axios.get('http://jsonplaceholder.typicode.com/users');
    request.then((data) => {
      dispatch({
          type: 'FETCH_USER_LIST',
          status: 'loaded',
          payload: data
      });
    });
  };

}
