import React from 'react';
import SearchBar from './SearchBar';

import youtubeApi from '../api/youtube-api';

class App extends React.Component {
  state = { videos: [] };
  searchSubmit = async term => {
    const response = await youtubeApi.get('/search', {
      q: term
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.searchSubmit} />
      </div>
    );
  }
}

export default App;
