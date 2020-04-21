import React from 'react';

import Form from './Form/TodoListForm';
import ToDoList from './ToDoList/ToDoList';
import DoneList from './DoneList/DoneList';
import { ListContextProvider } from './Context/ListContext';

import './App.scss';

export default () => {
  return (
    <ListContextProvider>
      <div className='app'>
        <Form />
        <div className='lists-container'>
          <ToDoList />
          <DoneList />
        </div>
      </div>
    </ListContextProvider>
  );
};
