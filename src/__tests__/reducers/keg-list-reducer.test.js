import kegListReducer from '../../reducers/keg-list-reducer'
import * as a from '../../actions/ActionTypes'

describe('kegListReducer', () => {

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
  const kegData = {
    name: 'yummy',
    brand: 'yoyos',
    flavor: 'tasty',
    price: 100,
    quantity: 127,
    id: 1
  }

  test('should return efault state if there is no action type [assed into the reducer', ()=> {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test("should successfu;;y add new keg data to masterkegList", ()=> {
    const { name, brand, flavor, price, quantity, id } = kegData;
    
    action = {
      type: a.ADD_KEG,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id,
    }
    
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id,
      }
    });
  });

  test('Should successfully delete a Keg', () => {
    action = {
      type: a.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'trapper',
        brand: 'migos',
        flavor: 'tasty',
        price: 150,
        quantity: 127,
        id: 2,
      },
    });
  });

})