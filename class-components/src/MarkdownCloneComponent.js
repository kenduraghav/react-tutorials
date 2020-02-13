import React, { Fragment } from 'react';

function HtmlText(props) {
  return <div>{props.text}</div>;
}

/**
 * A Simple Component to convert  plain text to rich text format.
 */
class MarkdownCloneComponent extends React.Component {
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
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    });
  };

  convertPlainTextToHtml = () => {
    var input = this.state.input;
    if (input !== '' && input.startsWith('#')) {
      var start = input.indexOf('#');
      var end = input.lastIndexOf('#');
      var headerTag = input.substring(start, end + 1);
      var output = '';
      if (headerTag.length === 1) {
        output = input.replace('#', '');
        output = <h1>{output}</h1>;
      }
    }
    this.setState({
      outputText: output
    });
  };

  render() {
    return (
      <div className='ui vertically divided grid'>
        <div className='two column row'>
          <div className='column'>
            <textarea
              rows='10'
              cols='50'
              value={this.state.input}
              onChange={this.onChangeUserInput}
              onBlur={this.convertPlainTextToHtml}
            />
          </div>
          <div className='column'>
            <HtmlText text={this.state.outputText} />
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownCloneComponent;
