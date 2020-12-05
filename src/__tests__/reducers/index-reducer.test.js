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
      formVisible: false,
      editing: false,
      keg: null
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that Add_Keg action works for KegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'yummy',
      brand: 'yoyos',
      flavor: 'tasty',
      price: 100,
      quantity: 127,
      id: 1,
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });


  test('check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action ));
  });
  
  test('check that EDITING action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.EDITING
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action ));
  });
});