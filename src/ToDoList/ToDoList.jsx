import React, { useContext } from 'react';
import { ListContext } from './../Context/ListContext';
import Button from './../Button/ButtonComponent';

export default () => {
  const { list, completeTask, error } = useContext(ListContext);

  //console.log(list);

  const filteredList = list.filter((item) => !item.isDone);

  return (
    <div className='to-do-list list'>
      <h2>To do</h2>
      <ul>
        {filteredList.map((el) => (
          <li key={el.value}>
            {el.value}
            <Button click={() => completeTask(el.value)} content={'done'} />
          </li>
        ))}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};
