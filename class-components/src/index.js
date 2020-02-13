import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
// import CueCard from './CueCard';
import SearchComponent from './SearchComponent';
import MarkdownCloneComponent from './MarkdownCloneComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLike: false };
  }

  onLikeIconClick() {
    this.setState({
      isLike: true
    });
  }

  render() {
    return (
      <div>
        <div className='ui container'>
          <h2 className='ui left floated header'>100DaysofCode</h2>
          <h2 className='ui right floated header'>
            <Clock />
          </h2>

          <div className='ui clearing divider'></div>
          <h2 className='ui center aligned segment header'>
            Welcome to the world of REACT!!!!
          </h2>
          <div className='ui clearing divider'></div>
          <div className='ui right floated' style={{ display: 'none' }}>
            <SearchComponent />
          </div>
          <div className='ui clearing hidden divider'></div>
          <MarkdownCloneComponent />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
