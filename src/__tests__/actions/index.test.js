import * as actions from '../../actions/index';
import * as c from '../../actions/ActionTypes';

describe('keg actions', () => {
  let keg;
  it('deleteKeg is DELETE_KEG', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleform should create TOGGLE_FORM action', ()=> {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });


  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'yummy',
      brand: 'yoyos',
      flavor: 'tasty',
      price: 100,
      quantity: 127,
      id: 1,
    })).toEqual({
      type: c.ADD_KEG,
      name: 'yummy',
      brand: 'yoyos',
      flavor: 'tasty',
      price: 100,
      quantity: 127,
      id: 1,
    });
  });

  test('selectKeg should be SELECT_KEG', () => {
    expect(actions.selectKeg(keg)).toEqual({
      type: c.SELECT_KEG,
      keg: keg
    })
  })
})