import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
  render() {
    return (
      <div className='ui field'>
        <label>
          <LanguageContext.Consumer>
            {(value) => (value === 'English' ? 'Name' : 'Nom')}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
