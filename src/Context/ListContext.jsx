import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext({});

export const ListContextProvider = (props) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('list')) {
      setList(JSON.parse(localStorage.getItem('list')) || []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    setError(null);
  }, [list]);

  const addTasktoToDoList = (value) => {
    const existingElement = list.find((el) => el.value === value);
    if (!existingElement) {
      const task = { value: value, isDone: false };
      setList([task, ...list]);
    } else {
      setError('Task already exist');
    }
  };

  const completeTask = (value) => {
    const listBis = [...list];
    const index = listBis.findIndex((el) => el.value === value);
    listBis[index].isDone = true;
    setList(listBis);
  };

  const deleteTask = (value) => {
    const listBis = [...list];
    const index = listBis.findIndex((el) => el.value === value);
    listBis.splice(index, 1);
    setList(listBis);
  };

  const resetLists = () => {
    setList([]);
  };

  const value = {
    list,
    addTasktoToDoList,
    completeTask,
    deleteTask,
    resetLists,
    error,
  };

  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
};

export const ListContextConsumer = ListContext.Consumer;
