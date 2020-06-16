import 'dotenv/config';
import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
} from '../types';
import axios from 'axios';

// const { REACT_APP_URL_API } = process.env;

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post('https://europe-west1-inlove-46f42.cloudfunctions.net/api/login', userData)
    .then(res => {
      setAuthorization(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/'); //redirect to the home page
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
    });
};

export const setAuthorization = token => {
  const fBIdToken = `Bearer ${token}`;
  localStorage.setItem('fBIdToken', fBIdToken);
  //seting authorization to the header axios
  axios.defaults.headers.common['Authorization'] = fBIdToken;
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('fBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get('/user')
    .then(res => {
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch(err => console.log(err));
};
