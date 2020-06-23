import 'dotenv/config';
import {
  // SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_DATA,
  SET_UNAUTHENTICATED,
  SEND_INVITE,
  SUBMIT_EMAIL,
  RESET_PASSWORD,
  CREATE_PASSWORD,
  SET_USERS,
  SET_USER,
  DELETE_USER,
} from '../types';
import axios from 'axios';

// const { REACT_APP_URL_API } = process.env;

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post('http://api.nurc.bict.rw/login/', userData)
    .then(res => {
      console.log('login:', res.data);
      const { token, role } = res.data;
      setAuthorization(token, role);
      // dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/dashboard'); //redirect to the home page
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response });
    });
};

export const sendAnInvite = sendInviteData => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      'http://api.nurc.bict.rw/register/',
      sendInviteData
    )
    .then(res => {
      // setAuthorization(res.data.token);
      console.log(res.data);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SEND_INVITE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
    });
};

export const forgetPassword = sendEmail => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      'https://europe-west1-inlove-46f42.cloudfunctions.net/api/signup',
      sendEmail
    )
    .then(res => {
      setAuthorization(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SUBMIT_EMAIL, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
    });
};

export const resetPassword = sendEmail => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      'https://europe-west1-inlove-46f42.cloudfunctions.net/api/signup',
      sendEmail
    )
    .then(res => {
      setAuthorization(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: RESET_PASSWORD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
    });
};

export const createPassword = passwordData => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      'https://europe-west1-inlove-46f42.cloudfunctions.net/api/signup',
      passwordData
    )
    .then(res => {
      setAuthorization(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: CREATE_PASSWORD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data.errors });
    });
};

export const setAuthorization = (token, role) => {
  const nurcToken = `Token ${token}`;
  localStorage.setItem('nurcToken', nurcToken);
  localStorage.setItem('nurcRole', role);
  //seting authorization to the header axios
  axios.defaults.headers.common['Authorization'] = nurcToken;
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('nurcToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

// export const getUserData = () => dispatch => {
//   dispatch({ type: LOADING_UI });
//   axios
//     .get('/user')
//     .then(res => {
//       dispatch({ type: SET_USER, payload: res.data });
//     })
//     .catch(err => console.log(err));
// };

// Get all users
export const getUsers = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('https://europe-west1-lovers-ca431.cloudfunctions.net/api/posts')
    .then(res => {
      dispatch({
        type: SET_USERS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: [],
      });
    });
};

export const deleteUser = postId => dispatch => {
  axios
    .delete(`/post/${postId}`)
    .then(() => {
      dispatch({ type: DELETE_USER, payload: postId });
    })
    .catch(err => console.log(err));
};

export const updateUser = newPost => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/post', newPost)
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
      // dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors,
      });
    });
};
