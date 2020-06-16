import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SEND_INVITE
} from '../types';

const initialState = {
  authenticated: false,
  credentials: {},
  invitation:{},
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
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state; //or return initialState
  }
}