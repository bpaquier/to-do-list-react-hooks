import React, { useContext } from 'react';
import { ListContext } from './../Context/ListContext';
import Button from './../Button/ButtonComponent';

export default () => {
  const list = useContext(ListContext);

  return (
    <div className='done-list list'>
      <h2>Done</h2>
      <ul>
        {list.doneList.map((el, i) => (
          <li key={i}>
            {el} <Button click={() => list.deleteTask(i)} content={'delete'} />
          </li>
        ))}
      </ul>
    </div>
  );
};
