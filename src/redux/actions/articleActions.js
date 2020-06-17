import 'dotenv/config';
import { SET_ERRORS, POST_ARTICLE,
  LOADING_DATA, CLEAR_ERRORS, LOADING_UI, DELETE_ARTICLE,SET_ARTICLES } from '../types';
import axios from 'axios';
import { setAuthorization } from './userActions';
const { REACT_APP_BASE_URL } = process.env;

// Post a article
export const addArticle = newArticle => dispatch => {
  setAuthorization('910fe68594c2d5c906446614b0a90db560398407');
  console.log('Resultzzzz:', newArticle);
  dispatch({ type: LOADING_UI });
  axios
    .post(`${REACT_APP_BASE_URL}/article/store/`, newArticle)
    .then(res => {
      console.log('Result:', res.data);
      dispatch({
        type: POST_ARTICLE,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      console.log('error:', err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      });
    });
};

export const updateArticle = (articleId, updateData) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .put(`${REACT_APP_BASE_URL}/article/update/`, updateData)
    .then(res => {
      dispatch({
        type: POST_ARTICLE,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.error,
      });
    });
};

export const deleteArticle = articleId => dispatch => {
  axios
    .delete(`http://localhost:3000/api/article/${articleId}`)
    .then(() => {
      dispatch({ type: DELETE_ARTICLE, payload: articleId });
    })
    .catch(err => console.log(err));
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getArticles = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('https://europe-west1-lovers-ca431.cloudfunctions.net/api/posts')
    .then(res => {
       console.log('dddddddd', res.data)
      dispatch({
        type: SET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: []
      });
    });
};
