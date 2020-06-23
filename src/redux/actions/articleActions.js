import 'dotenv/config';
import {
    SET_ERRORS,
    POST_ARTICLE,
    LOADING_DATA,
    CLEAR_ERRORS,
    LOADING_UI,
    DELETE_ARTICLE,
    SET_ARTICLES,
    CHANGE_ARTICLE_STATUS
} from '../types';
import axios from 'axios';
import { setAuthorization } from './userActions';
const { REACT_APP_BASE_URL } = process.env;

// Post a article
export const addArticle = (newArticle, history) => dispatch => {
    const token = localStorage.getItem('nurcToken');
    // const role = localStorage.getItem('nurcRole');
    // setAuthorization(token, role);
    console.log('Resultzzzz:', newArticle);
    axios.defaults.headers.common['Authorization'] = 'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
    dispatch({ type: LOADING_UI });
    axios
        .post('http://api.nurc.bict.rw/article/store/', newArticle)
        .then(res => {
            console.log('Result:', res.data);
            dispatch({
                type: POST_ARTICLE,
                payload: res.data,
            });
            history.push('/articles'); //redirect to the home page
            // dispatch(clearErrors());
        })
        .catch(err => {
            console.log('error:', err.response);
            dispatch({
                type: SET_ERRORS,
                payload: err.response,
            });
        });
};

export const updateArticle = (updateData, history) => dispatch => {
    axios.defaults.headers.common['Authorization'] = 'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
    dispatch({ type: LOADING_UI });
    console.log('dddddzzz', updateData)
    axios
        .post('http://api.nurc.bict.rw/article/update/', updateData)
        .then(res => {
            console.log('resultz', res.data);
            dispatch({
                type: POST_ARTICLE,
                payload: res.data,
            });
            history.push('/articles'); //redirect to the home page
            // dispatch(clearErrors());
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response,
            });
        });
};

export const deleteArticle = articleId => dispatch => {
    axios.defaults.headers.common['Authorization'] = 'Token e81989f716e5d3068c90e98cf5af38851867b75f';
    axios
        .post('http://api.nurc.bict.rw/article/delete/', articleId)
        .then((res) => {
            dispatch({ type: DELETE_ARTICLE, payload: articleId.id });
        })
        .catch(err => console.log(err));
};

export const changeArticleStatus = (articleId, history) => dispatch => {
    axios.defaults.headers.common['Authorization'] = 'Token e81989f716e5d3068c90e98cf5af38851867b75f';
    axios.post('http://api.nurc.bict.rw/article/status/', articleId)
        .then((res) => {
            history.push('/articles');
            dispatch({ type: CHANGE_ARTICLE_STATUS, payload: articleId.id });
        })
        .catch(err => console.log(err));
};

export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS });
};

export const getArticles = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.defaults.headers.common['Authorization'] = 'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
    axios
        .get('http://api.nurc.bict.rw/article/all/')
        .then(res => {
            console.log('dddddddd', res.data)
            dispatch({
                type: SET_ARTICLES,
                payload: res.data
            });
        })
        .catch(err => {
            console.log('eerrrrr', err.response)
            dispatch({
                type: SET_ERRORS,
                payload: []
            });
        });
};