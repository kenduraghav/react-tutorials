import { combineReducers } from 'redux';

const booksReducer = () => {
  return [
    { title: 'Thirukkural', author: 'Thiruvalluvar' },
    { title: 'Ponniyin Selvan', author: 'Kalki' },
    { title: 'Parthiban Kanavu', author: 'Kalki' },
    { title: 'Mohini Theevu', author: 'Kalki' },
    { title: 'Thaneer Desam', author: 'Vairamuthu' }
  ];
};

const selectedBookReducer = (selectedBook = null, action) => {
  if (action.type === 'BOOK_SELECTED') {
    return action.payload;
  }
  return selectedBook;
};

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer
});
