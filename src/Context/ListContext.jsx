import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext({});

export const ListContextProvider = (props) => {
  const [toDoList, toDoListChange] = useState(
    JSON.parse(localStorage.getItem('todoList'))
  );

  const [doneList, doneListChange] = useState(
    JSON.parse(localStorage.getItem('doneList'))
  );

  const addTasktoToDoList = (task) => {
    toDoListChange([task, ...toDoList]);
    localStorage.setItem('todoList', JSON.stringify(toDoList));
  };

  const taskIsDone = (index) => {
    const taksToDo = [...toDoList];
    taksToDo.splice(index, 1);
    toDoListChange(taksToDo);
    localStorage.setItem('todoList', JSON.stringify(toDoList));

    doneListChange([...doneList, toDoList[index]]);
    localStorage.setItem('doneList', JSON.stringify(doneList));
  };

  const deleteTask = (index) => {
    const tasksDone = [...doneList];
    tasksDone.splice(index, 1);
    doneListChange(tasksDone);
    localStorage.setItem('doneList', JSON.stringify(doneList));
  };

  const resetLists = () => {
    toDoListChange([]);
    doneListChange([]);
    localStorage.setItem('todoList', JSON.stringify(toDoList));
    localStorage.setItem('doneList', JSON.stringify(doneList));
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(toDoList));
    localStorage.setItem('doneList', JSON.stringify(doneList));
    console.log(JSON.parse(localStorage.getItem('todoList')));
    console.log(JSON.parse(localStorage.getItem('doneList')));
  });

  const value = {
    toDoList: toDoList,
    doneList: doneList,
    addTasktoToDoList: addTasktoToDoList,
    taskIsDone: taskIsDone,
    deleteTask: deleteTask,
    resetLists: resetLists,
  };

  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
};

export const ListContextConsumer = ListContext.Consumer;
