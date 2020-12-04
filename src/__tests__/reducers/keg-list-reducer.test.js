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
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
})