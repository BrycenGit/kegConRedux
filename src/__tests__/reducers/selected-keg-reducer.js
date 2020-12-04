import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/ActionTypes'

describe("selectedKegReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(false);
  });

  test('should toggle from visibility state to true', () => {
    expect(selectedKegReducer(null, { type: a.EDITING })).toEqual(true);
  });


});