import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 369309dc8a88dbefbb563f2630f0536660dccee9b9f0ceb96c09acb77eae00b0'
  }
});
