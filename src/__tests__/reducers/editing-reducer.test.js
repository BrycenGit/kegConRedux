import editingReducer from '../../reducers/editing-reducer';
import * as a from '../../actions/ActionTypes'

describe("editingReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test('should toggle from visibility state to true', () => {
    expect(editingReducer(false, { type: a.EDITING })).toEqual(true);
  });


});