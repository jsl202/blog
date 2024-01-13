import { combineReducers } from '../../node_modules/redux/dist/redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
