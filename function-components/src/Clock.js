import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <div className='ui label huge'>Time now is:</div>
        <label className='ui blue label large'>{this.state.time}</label>
      </div>
    );
  }
}

export default Clock;
