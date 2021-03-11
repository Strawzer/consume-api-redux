import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Request } from '../constants';
import { Dispatch } from 'redux';


export const getPatients = () => {
  return async (dispatch: Dispatch<Action>) => {

    dispatch({
      type: ActionType.GET_PATIENTS
    });

    try {
      const { data } = await axios.get(Request.url, Request.config);
      dispatch({
        type: ActionType.GET_PATIENTS_SUCCESS,
        payload: data
      });

      } catch (err) {
      dispatch({
        type: ActionType.GET_PATIENTS_ERROR,
        payload: err.message
      });
    }
  };
};

