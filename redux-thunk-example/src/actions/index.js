import JsonPlaceholder from '../api/JsonPlaceholder';

export const fetchPosts = async () => {
  //Bad approach!!!
  //Rules of an action creator.
  //1 Actions must be plain objects.
  //2 use custom middleware for async actions.
  const response = await JsonPlaceholder.get('/posts');
  return {
    type: 'FETCH_POST',
    payload: response
  };
};
