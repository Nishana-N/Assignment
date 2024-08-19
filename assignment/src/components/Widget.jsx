import React from 'react';

const Widget = ({ widget, onRemove }) => (
  <div>
    <h3>{widget.name}</h3>
    <p>{widget.text}</p>
    <button onClick={() => onRemove(widget.id)}>Remove</button>
  </div>
);

export default Widget;
