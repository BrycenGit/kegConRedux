import * as c from '../actions/ActionTypes'

export default (state = {}, action) => {
  const { name, brand, flavor, price, quantity, id } = action;

  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          quantity: quantity,
          id: id,
        }
      });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.PINT:
      const pintState = { ...state };
      console.log(pintState)
      pintState[id].quantity --
      return pintState;
    default:
      return state;
  }
};