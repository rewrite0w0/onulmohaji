const sortingCreatedDate = todolist => {
  return todolist.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));
};

const sortingModifiedDate = todolist => {
  return todolist.sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1));
};

// 또 필요한 정렬함수...
const sortingModifiedDateAndDoneCheck = todolist => {
  // todolist.sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1));

  let filteringDoneFalse = todolist
    .filter(isDone => isDone.doneCheck === false)
    .sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1));

  let filteringDoneTrue = todolist
    .filter(isDone => isDone.doneCheck === true)
    .sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1));

  // console.log(filteringDoneFalse);
  let filteringDoneList = filteringDoneFalse.concat(filteringDoneTrue);

  return filteringDoneList;
};

const sortingDoneCheck = todolist => {
  return todolist.sort((x, y) => (x.doneCheck < y.doneCheck ? -1 : 1));
};

const other = todolist => {
  let list = [
    todolist
      .filter(z => z.doneCheck === false)
      .sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1)),

    todolist
      .filter(z => z.doneCheck === true)
      .sort((x, y) => (x.modifiedDate < y.modifiedDate ? 1 : -1)),
  ];

  return list;
};

module.exports = {
  sortingCreatedDate,
  sortingModifiedDate,
  sortingModifiedDateAndDoneCheck,
  sortingDoneCheck,
  other,
};
