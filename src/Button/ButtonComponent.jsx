import React from 'react';

export default ({ click, content }) => (
  <button onClick={() => click()}>{content}</button>
);
