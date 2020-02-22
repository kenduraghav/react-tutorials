import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';

const styleOptions = {
  margin: '50px'
};

class App extends React.Component {
  render() {
    return (
      <div style={styleOptions} className='ui container'>
        <Calculator />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
