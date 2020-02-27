import React, { Component } from 'react';
import { selectBook } from '../actions';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <div className='item' key={book.title}>
          <div className='right floated content'>
            <div
              className='ui button primary'
              onClick={() => this.props.selectBook(book)}
            >
              Select
            </div>
          </div>
          <div className='content'>{book.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { books: state.books };
};

export default connect(mapStateToProps, {
  selectBook
})(BookList);
