import { combineReducers } from 'redux';
import patientsReducer from './patientsReducers';

const reducers = combineReducers({
  patients: patientsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;