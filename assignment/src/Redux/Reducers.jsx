import { ADD_WIDGET, REMOVE_WIDGET } from './Actions';

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" }
      ]
    },
    {
      name: "Another Category",
      widgets: [
        { id: 3, name: "Widget 3", text: "Random text for Widget 3" }
      ]
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.name === action.payload.categoryName
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget]
              }
            : category
        )
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.name === action.payload.categoryName
            ? {
                ...category,
                widgets: category.widgets.filter(
                  widget => widget.id !== action.payload.widgetId
                )
              }
            : category
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
