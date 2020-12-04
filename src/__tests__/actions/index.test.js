import * as actions from '../../actions/index';
import * as c from '../../actions/ActionTypes';

describe('keg actions', () => {
  it('deleteKeg is DELETE_KEG', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });


})