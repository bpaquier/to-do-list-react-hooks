import React, { useState, useContext, useRef } from 'react';
import { ListContext } from './../Context/ListContext';
import Button from './../Button/ButtonComponent';

export default () => {
  const list = useContext(ListContext);

  const [taskValue, taskValueChange] = useState(null);

  const nameInputRef = useRef();

  const handleTaskValueChange = (e) => {
    taskValueChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    list.addTasktoToDoList(taskValue);
    taskValueChange(null);
    nameInputRef.current.value = '';
  };

  return (
    <div className='list-controler'>
      <form className='to-do-form' onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Enter a task'
          onChange={(e) => {
            handleTaskValueChange(e);
          }}
          ref={nameInputRef}
        ></input>
        <input type='submit' value='add task' disabled={!taskValue}></input>
      </form>
      <Button click={() => list.resetLists()} content='reset all' />
    </div>
  );
};
