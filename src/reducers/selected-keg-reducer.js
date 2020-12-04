import * as c from './../actions/ActionTypes'

export default (state = null, action) => {

  const { keg } = action;

  switch (action.type) {
    case c.SELECT_KEG:
      const newState = keg
      return newState;
    case c.UNSELECT_KEG:
      const newState = null
      return newState;
    default:
      return state;
  }
};