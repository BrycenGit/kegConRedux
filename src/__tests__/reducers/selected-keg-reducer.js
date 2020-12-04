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
  let action2;
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
  
  test('should set state to null', () => {
    action = {
      type: a.SELECT_KEG,
      keg: keg}

    action2 = {type: a.UNSELECT_KEG};
    
    const selectedState = selectedKegReducer(currentState, action)

    expect(selectedKegReducer(selectedState, action2)).toEqual(null);
  });

});