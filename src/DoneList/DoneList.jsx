import React, { useContext } from 'react';
import { ListContext } from './../Context/ListContext';
import Button from './../Button/ButtonComponent';

export default () => {
  const { list, deleteTask } = useContext(ListContext);

  const filteredList = list.filter((item) => item.isDone);

  return (
    <div className='done-list list'>
      <h2>Done</h2>
      <ul>
        {filteredList.map((el) => (
          <li key={el.value}>
            {el.value}{' '}
            <Button click={() => deleteTask(el.value)} content={'delete'} />
          </li>
        ))}
      </ul>
    </div>
  );
};
