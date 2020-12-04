import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/ActionTypes'

describe("selectedKegReducer", () => {
  const currentState = {
    1: {
      name: 'yummy',
      brand: 'yoyos',
      flavor: 'tasty',
      price: 100,
      quantity: 127,
      id: 1,
    },
    2: {
      name: 'trapper',
      brand: 'migos',
      flavor: 'tasty',
      price: 150,
      quantity: 127,
      id: 2,
    },
  }
  let action;
  const keg = {
    name: 'yummy',
    brand: 'yoyos',
    flavor: 'tasty',
    price: 100,
    quantity: 127,
    id: 1
  }
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test('should select a keg', () => {

    action = {
      type: a.SELECT_KEG,
      keg: keg
    }
    expect(selectedKegReducer(currentState, action)).toEqual(keg);
  });
  
  test('should toggle from visibility state to true', () => {

    action = {
      type: a.UNSELECT_KEG,
    }
    expect(selectedKegReducer(currentState, action)).toEqual(keg);
  });

});