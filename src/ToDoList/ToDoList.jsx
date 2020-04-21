import React, { useContext } from 'react';
import { ListContext } from './../Context/ListContext';
import Button from './../Button/ButtonComponent';

export default () => {
  const list = useContext(ListContext);

  return (
    <div className='to-do-list list'>
      <h2>To do</h2>
      <ul>
        {list.toDoList.map((el, i) => (
          <li key={i}>
            {el} <Button click={() => list.taskIsDone(i)} content={'done'} />
          </li>
        ))}
      </ul>
    </div>
  );
};
