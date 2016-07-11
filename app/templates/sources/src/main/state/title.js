import mapActionToReducer from 'redux-action-reducer-mapper';

// define available actions
export default {
  changeTitle(newTitle) {
    return { type: 'CHANGE_TITLE', payload: newTitle }
  }
}

// define reducer that knows how to deal with the actions defined above
/*
export const reducer = (state = 'Hello, world!', action) => {
  switch(action.type) {
    case 'CHANGE_TITLE':
      return action.payload;
    default:
      return state;
  }
}
*/

// define reducer that knows how to deal with the actions defined above
// but using redux-action-reducer-mapper which allows to keep the complexity
// of the reducer on a predictibly low level
export const reducer = mapActionToReducer({
  'default': 'Hello, world!',
  'CHANGE_TITLE': (state, action) => action.payload
});
