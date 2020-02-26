//Action Creator
export const selectBook = book => {
  //Return an action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
