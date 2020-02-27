import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Please select a Book to view</div>;
  }
  return (
    <div>
      <div className='ui header'>Book Detail</div>
      <div className='ui red card'>
        <div className='content'>
          <p>
            <b>Title:</b> {book.title}
          </p>
          <p>
            <b>Author:</b> {book.author}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { book: state.selectedBook };
};

export default connect(mapStateToProps)(BookDetail);
