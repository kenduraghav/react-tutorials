import _ from 'lodash';

import JsonPlaceholder from '../api/JsonPlaceholder';

//Rules of an action creator.
//1 Actions must be plain objects.
//2 use custom middleware for async actions.
export const fetchPosts = () => async dispatch => {
  const response = await JsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(uid => {
      dispatch(fetchUser(uid));
    })
    .value();
};

export const fetchUser = id => async dispatch => {
  const response = await JsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// using memoize function.
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await JsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
