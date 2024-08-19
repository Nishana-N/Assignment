import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from '../Redux/Actions';
import Widget from './Widget';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(category.name, widgetId));
  };

  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} onRemove={handleRemoveWidget} />
      ))}
    </div>
  );
};

export default Category;
