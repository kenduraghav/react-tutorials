import JsonPlaceholder from '../api/JsonPlaceholder';

//Rules of an action creator.
//1 Actions must be plain objects.
//2 use custom middleware for async actions.
export const fetchPosts = () => async dispatch => {
  const response = await JsonPlaceholder.get('/posts');
  console.log(response);
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
