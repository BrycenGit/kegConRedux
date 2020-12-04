import * as actions from '../../actions/index';
import * as c from '../../actions/ActionTypes';

describe('keg actions', () => {
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

})