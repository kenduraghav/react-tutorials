import React from 'react';
import SearchBar from './SearchBar';
import youtubeApi from '../api/youtube-api';
import VideosList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  searchSubmit = async term => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  componentDidMount() {
    this.searchSubmit('flowers');
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.searchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideosList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
