import _ from 'lodash';

import JsonPlaceholder from '../api/JsonPlaceholder';

//Rules of an action creator.
//1 Actions must be plain objects.
//2 use custom middleware for async actions.
export const fetchPosts = () => async dispatch => {
  const response = await JsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

/* export const fetchUser = id => async dispatch => {
  const response = await JsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}; */

export const fetchUser = function(id) {
  return _.memoize(async function(dispatch) {
    const response = await JsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  });
};
