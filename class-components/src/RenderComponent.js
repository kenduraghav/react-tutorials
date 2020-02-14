import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const options = {
  decodeEntities: true
};

const RenderComponent = props => {
  if (props.outputHtml !== 'undefined' || props.outputHtml !== '') {
    return (
      <div>
        <div className='ui small header'>Output:</div>
        <div>{ReactHtmlParser(props.outputHtml, [options])}</div>
      </div>
    );
  }
  return <div>Heaader</div>;
};

export default RenderComponent;
