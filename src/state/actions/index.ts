import { ActionType } from '../action-types'

interface GetPatientsAction {
  type: ActionType.GET_PATIENTS;
}

interface GetPatientsSuccessAction {
  type: ActionType.GET_PATIENTS_SUCCESS;
  payload: string[];
}

interface GetPatientsErrorAction {
  type: ActionType.GET_PATIENTS_ERROR;
  payload: string;
}

export type Action = 
  | GetPatientsAction 
  | GetPatientsSuccessAction 
  | GetPatientsErrorAction;