import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import phoneListReducer from './phone-list.reducer';

export default combineReducers({
  phoneList: phoneListReducer,
  form: formReducer
});