import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SEND_INVITE,
  RESET_PASSWORD,
  SUBMIT_EMAIL
} from '../types';

const initialState = {
  authenticated: false,
  credentials: {},
  invitation:{},
  sentEmail:'',
  resetPwd:'',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
      case SEND_INVITE:
        return {
          authenticated: true,
          loading: false,
          invitation:action.payload
        };
      case SUBMIT_EMAIL:
        return {
          authenticated: true,
          loading: false,
          sendEmail:action.payload
        };
      case RESET_PASSWORD:
        return {
          authenticated: true,
          loading: false,
          resetPwd:action.payload
        };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state; //or return initialState
  }
}