import { ActionType } from '../action-types';
import { Action } from '../actions'

interface PatientsState{
  loading: boolean;
  error: string | null;
  data: string[];  
}

const initialState = {
  loading: false,
  error: null,
  data: []
};


const patientsReducer = (
  state: PatientsState = initialState,
  action: Action
  ) : PatientsState  => {  
  switch ( action.type )
  {
    case ActionType.GET_PATIENTS:
      return { loading: true, error: null, data: [] };
    
    case ActionType.GET_PATIENTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.GET_PATIENTS_ERROR  :
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default patientsReducer;