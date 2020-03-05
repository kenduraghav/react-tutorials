import React from 'react';
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

export default App;
