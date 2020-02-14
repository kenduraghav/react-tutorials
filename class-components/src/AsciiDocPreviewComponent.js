import React from 'react';
import RestClient from './api/rest-client';
import RenderComponent from './RenderComponent';

/**
 * A Simple Component to convert  plain text to Html Format.
 */
class AsciiDocPreviewComponent extends React.Component {
  //1. Provide a textbox to type user input.
  //2. Display the text as the user types in near panel.
  //3. create two panels.
  //4. Get user input in one panel using textbox.
  //5. Use output panel  to display the text as the user type.
  //6. Convert special keywords for header tag, bold tag, italics, underline.
  //7. Examples from markdown.

  constructor(props) {
    super(props);
    this.state = { input: '', outputText: '' };
  }

  onChangeUserInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  onClickSubmitButton = async e => {
    e.preventDefault();
    const response = await RestClient.get('/asciidoc', {
      params: { input: `${this.state.input}` }
    });
    this.setState({
      output: response.data
    });
  };

  render() {
    return (
      <form className='ui form'>
        <div className='ui large centered header'>
          AsciiDoctor Preview Component:
        </div>
        <div className='ui vertically divided grid'>
          <div className='two column row'>
            <div className='column'>
              <textarea
                rows='10'
                cols='10'
                value={this.state.input}
                onChange={this.onChangeUserInput}
              />
              <button onClick={this.onClickSubmitButton}>Preview</button>
            </div>
            <div className='column'>
              <RenderComponent outputHtml={this.state.output} />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AsciiDocPreviewComponent;
