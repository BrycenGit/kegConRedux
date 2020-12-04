import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
// import formVisibleReducer from '../../reducers/form-visible-reducer';
// import kegListReducer from '../../reducers/keg-list-reducer';
// import editingReducer from '../../reducers/editing-reducer';
// import * as c from '../../actions/ActionTypes'

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('should return defaultt state if no actio n is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false
    });
  });


});