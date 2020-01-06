import { combineReducers } from 'redux';

import { reducer as toastr } from 'react-redux-toastr';
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  toastr,
});
