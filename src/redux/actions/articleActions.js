import 'dotenv/config';
import {
	SET_ERRORS,
	POST_ARTICLE,
	LOADING_DATA,
	CLEAR_ERRORS,
	LOADING_UI,
	DELETE_ARTICLE,
	SET_ARTICLES,
	CHANGE_ARTICLE_STATUS,
	VIEW_ARTICLES,
	VIEW_ARTICLE,
	ADD_COMMENT,
	GET_COMMENTS,
	ADD_VIEW,
	GET_VIEWS,
	SEARCH_ARTICLES,
	RELATED_ARTICLES,
	NO_FOUND,
	GET_ALL_COMMENTS,
	SET_COMMENT,
} from '../types';
import axios from 'axios';
import { setAuthorization } from './userActions';
// const { REACT_APP_BASE_URL } = process.env;

// Post a article
export const addArticle = (newArticle, history) => dispatch => {
	const token = localStorage.getItem('nurcToken');
	// const role = localStorage.getItem('nurcRole');
	// setAuthorization(token, role);
	axios.defaults.headers.common['Authorization'] =
		'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
	dispatch({ type: LOADING_UI });
	axios
		.post('http://api.nurc.bict.rw/article/store/', newArticle)
		.then(res => {
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

export const updateArticle = (updateData, history) => dispatch => {
	axios.defaults.headers.common['Authorization'] =
		'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
	dispatch({ type: LOADING_UI });
	axios
		.post('http://api.nurc.bict.rw/article/update/', updateData)
		.then(res => {
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
	axios.defaults.headers.common['Authorization'] =
		'Token e81989f716e5d3068c90e98cf5af38851867b75f';
	axios
		.post('http://api.nurc.bict.rw/article/delete/', articleId)
		.then(res => {
			dispatch({ type: DELETE_ARTICLE, payload: articleId.id });
		})
		.catch(err => console.log(err));
};

export const changeArticleStatus = (articleId) => dispatch => {
	axios.defaults.headers.common['Authorization'] =
		'Token e81989f716e5d3068c90e98cf5af38851867b75f';
	axios
		.post('http://api.nurc.bict.rw/article/status/', articleId)
		.then(res => {
			dispatch({ type: CHANGE_ARTICLE_STATUS, payload: res.data });
		})
		.catch(err => console.log(err));
};

export const clearErrors = () => dispatch => {
	dispatch({ type: CLEAR_ERRORS });
};

export const getArticles = () => dispatch => {
	dispatch({ type: LOADING_DATA });
	axios.defaults.headers.common['Authorization'] =
		'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
	axios
		.get('http://api.nurc.bict.rw/article/all/')
		.then(res => {
			dispatch({
				type: SET_ARTICLES,
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

export const viewArticles = () => dispatch => {
	dispatch({ type: LOADING_DATA });
	axios
		.get('http://api.nurc.bict.rw/article/')
		.then(res => {
			const categories = res.data.map(i => i.category);
			const articles = res.data;
			const all = { articles, categories };
			dispatch({
				type: VIEW_ARTICLES,
				payload: all,
			});
		})
		.catch(err => {
			dispatch({
				type: SET_ERRORS,
				payload: [],
			});
		});
};

export const viewArticle = articleId => dispatch => {
	dispatch({ type: LOADING_DATA });
	axios
		.get(`http://api.nurc.bict.rw/article/view/${articleId}`)
		.then(res => {
			dispatch({
				type: VIEW_ARTICLE,
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

// ADD COMMENTS
export const addComment = commentData => dispatch => {
	axios
		.post('http://api.nurc.bict.rw/article/comment/store/', commentData)
		.then(res => {
			dispatch({ type: ADD_COMMENT, payload: res.data });
		})
		.catch(err => console.log(err));
};

// VIEW COMMENTS
export const viewComments = articleId => dispatch => {
	axios
		.post('http://api.nurc.bict.rw/article/comment/', articleId)
		.then(res => {
			dispatch({ type: GET_COMMENTS, payload: res.data });
		})
		.catch(err => console.log(err.response));
};

// COUNT VIEW ARTICLE
export const countViewArticle = articleId => dispatch => {
	axios
		.post('http://api.nurc.bict.rw/article/seen/store/', articleId)
		.then(res => {
			dispatch({ type: ADD_VIEW, payload: res.data });
		})
		.catch(err => console.log(err));
};

// ARTICLE VIEWS
export const getArticleViews = articleId => dispatch => {
	axios
		.post('http://api.nurc.bict.rw/article/seen/', articleId)
		.then(res => {
			dispatch({ type: GET_VIEWS, payload: res.data });
		})
		.catch(err => console.log(err.response));
};

export const searchArticles = searchItem => dispatch => {
	axios
		.get(`http://api.nurc.bict.rw/article/search/${searchItem}`)
		.then(res => {
			dispatch({
				type: SEARCH_ARTICLES,
				payload: res.data,
			});
		})
		.catch(err => {
			dispatch({
				type: NO_FOUND,
				payload: null,
			});
		});
};

export const relatedArticles = categoryId => dispatch => {
	axios
		.get(`http://api.nurc.bict.rw/article/related/${categoryId}`)
		.then(res => {
			dispatch({
				type: RELATED_ARTICLES,
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

export const changeCommentStatus = (articleId) => dispatch => {
	axios.defaults.headers.common['Authorization'] =
		'Token e81989f716e5d3068c90e98cf5af38851867b75f';
	axios
		.post('http://api.nurc.bict.rw/article/comment/status/', articleId)
		.then(res => {
			dispatch({ type: SET_COMMENT, payload: res.data });
		})
		.catch(err => console.log(err));
};

export const getComments = () => dispatch => {
	dispatch({ type: LOADING_DATA });
	axios.defaults.headers.common['Authorization'] =
		'Token 60756d77ba57d8de4ba99f2af2d4d04bb25cbb05';
	axios
		.get('http://api.nurc.bict.rw/article/comment/all/')
		.then(res => {
			dispatch({
				type: GET_ALL_COMMENTS,
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
