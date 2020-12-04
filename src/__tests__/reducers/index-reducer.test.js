import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import editingReducer from '../../reducers/editing-reducer';
import * as c from '../../actions/ActionTypes'

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('should return defaultt state if no actio n is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  


});