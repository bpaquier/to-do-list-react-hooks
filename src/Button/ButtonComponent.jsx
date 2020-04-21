import React from 'react';

export default ({ click, content, givenClass }) => (
  <button className={givenClass} onClick={() => click()}>
    {content}
  </button>
);
