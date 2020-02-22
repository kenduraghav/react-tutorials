import React from 'react';
import PadButton from './Padbutton';

import ResultView from './ResultView';

class Calculator extends React.Component {
  state = {
    selFirstNum: 0,
    selSecondNum: 0,
    selOperation: '',
    input: '',
    output: 'Calculator output'
  };

  handlePadInput = selNum => {
    this.setState({
      input: selNum
    });
  };

  handleNumSelect = numvalue => {
    let input = this.state.input + numvalue;
    this.setState({
      input: input
    });
    let selOperation = this.state.selOperation;
    if (selOperation === '') {
      this.setState({
        selFirstNum: numvalue
      });
    } else {
      this.setState({
        selSecondNum: numvalue
      });
    }
  };

  handleOpSelect = op => {
    let input = this.state.input + op.label;
    this.setState({
      input: input,
      selOperation: op.operation
    });
  };

  handleEquals = () => {
    let op1 = this.state.selFirstNum;
    let op2 = this.state.selSecondNum;
    let operator = this.state.selOperation;

    let result = 0;
    switch (operator) {
      case 'add':
        result = op1 + op2;
        break;
      case 'subtract':
        result = op1 - op2;
        break;
      case 'multiply':
        result = op1 * op2;
        break;
      case 'divide':
        result = op1 / op2;
        break;
      default:
        result = 0;
        break;
    }
    this.setState({
      output: result
    });
  };

  render() {
    return (
      <div className='ui cards'>
        <div className='ui card'>
          <PadButton
            input={this.state.input}
            onNumSelect={this.handleNumSelect}
            onOpSelect={this.handleOpSelect}
            onEquals={this.handleEquals}
          />
        </div>
        <div className='ui card'>
          <ResultView output={this.state.output} />
        </div>
      </div>
    );
  }
}

export default Calculator;
