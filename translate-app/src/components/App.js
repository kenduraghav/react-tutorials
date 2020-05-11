import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

export default class App extends React.Component {
  state = { language: 'English' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          <label>Select a Language:</label>
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('English')}
          ></i>
          <i
            className='flag france'
            onClick={() => this.onLanguageChange('France')}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
