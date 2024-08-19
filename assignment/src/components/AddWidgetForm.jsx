import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../Redux/Actions';

const AddWidgetForm = ({ categoryName }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    };
    dispatch(addWidget(categoryName, newWidget));
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Widget Name"
      />
      <input
        type="text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        placeholder="Widget Text"
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
