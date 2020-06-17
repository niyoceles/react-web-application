import {
  SET_USER,
  SET_USERS,
  LOADING_DATA,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SEND_INVITE,
  RESET_PASSWORD,
  CREATE_PASSWORD,
  SUBMIT_EMAIL
} from '../types';

const initialState = {
  users: [],
  authenticated: false,
  credentials: {},
  invitation:{},
  sentEmail:'',
  createPwd:'',
  resetPwd:'',
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
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
      case CREATE_PASSWORD:
        return {
          authenticated: true,
          loading: false,
          createPwd:action.payload
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