import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editing: editingReducer,

});

export default rootReducer;
