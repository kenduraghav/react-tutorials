import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <label>Select a Language:</label>
        <i
          className='flag in'
          onClick={() => this.context.onLanguageChange('English')}
        ></i>
        <i
          className='flag france'
          onClick={() => this.context.onLanguageChange('France')}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
