import * as c from './../actions/ActionTypes'

export default (state = null, action) => {

  const { keg } = action;

  switch (action.type) {
    case c.SELECT_KEG:
      const selectState = keg
      return selectState;
    case c.UNSELECT_KEG:
      return null;
    default:
      return state;
  }
};