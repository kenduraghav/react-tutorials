import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from './action';

class Counter extends React.Component {
  //state = { count: 0 };

  increment = () => {
    /* this.setState({
      count: this.state.count + 1
    }); */
    this.props.increment();
  };

  decrement = () => {
    /* this.setState({
      count: this.state.count - 1
    }); */
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div className='ui container'>
        <h2>Counter Example</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
