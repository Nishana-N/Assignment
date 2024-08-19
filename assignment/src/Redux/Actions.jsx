export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const addWidget = (categoryName, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryName, widget }
});

export const removeWidget = (categoryName, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryName, widgetId }
});