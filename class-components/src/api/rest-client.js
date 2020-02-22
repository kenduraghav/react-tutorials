import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4567',
  method: 'POST',
  headers: {
    'content-type': 'text/html',
    accept: 'application/x-www-form-urlencoded'
  }
});
