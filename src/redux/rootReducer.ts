import user, { UserState } from './User/reducer';
import global, { GobalState } from './Global/reducer';
import { combineReducers } from 'redux';

export interface RootReducer {
  user?: UserState;
  global?: GobalState;
  languageRedux?: any;
}

const rootReducer = combineReducers({
  user,
  global,
});

export default rootReducer;
