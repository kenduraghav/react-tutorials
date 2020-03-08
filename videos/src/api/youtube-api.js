import axios from 'axios';

const KEY = 'AIzaSyCUbkp8gK-RFxkYjNLkTdCUqPemgLB9NrE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: `${KEY}`
  }
});
