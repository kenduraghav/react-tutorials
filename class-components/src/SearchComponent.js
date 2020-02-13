import React from 'react';

const FruitsConfig = [
  'Apple',
  'Pears',
  'Orange',
  'Grapes',
  'Mango',
  'Guava',
  'Banana'
];

const FruitsContainer = props => {
  var fruits = [];
  if (props.list !== 'undefined') {
    fruits = props.list.map((fruit, i) => {
      return (
        <div key={i} className='item'>
          {fruit}
        </div>
      );
    });
  }
  return (
    <div className='ui relaxed list'>
      {fruits.length > 0 ? fruits : 'No result found'}
    </div>
  );
};

class SearchComponent extends React.Component {
  state = { searchTerm: '', fruits: FruitsConfig };

  onSubmitForm = event => {
    event.preventDefault();
    let value = this.state.searchTerm;
    if (value !== '') {
      let filteredValues = FruitsConfig.filter(f => {
        return f.toLowerCase().match(value.toLowerCase());
      });
      let fruitArr = filteredValues;
      this.setState({
        fruits: fruitArr
      });
    }
  };

  showAll = () => {
    this.setState({
      searchTerm: '',
      fruits: FruitsConfig
    });
  };

  render() {
    return (
      <div className='ui form'>
        <div className='ui header'>A simple search example</div>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <div className='ui fields'>
            <div className='ui large icon input'>
              <input
                type='text'
                placeholder='Search'
                value={this.state.searchTerm}
                onChange={e => this.setState({ searchTerm: e.target.value })}
              />
            </div>
            <button type='reset' className='ui button' onClick={this.showAll}>
              Show All
            </button>
          </div>
          <div className='ui hidden divider'></div>
          <div>
            <FruitsContainer list={this.state.fruits} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchComponent;
