const sortingTodosStandardCreatedDate = todolist => {
  todolist.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));
};

const sortingTodosStandardModifiedDate = todolist => {
  todolist.sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1));
};

// 또 필요한 정렬함수...
const sortingTodosStandardModifiedDateAndDoneCheck = todolist => {
  todolist.sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1));
};
// const sortingTodosStandard
// const sortingTodosStandard
// const sortingTodosStandard

module.exports = {
  sortingTodosStandardCreatedDate,
  sortingTodosStandardModifiedDate,
  sortingTodosStandardModifiedDateAndDoneCheck,
};
