import {
	POST_ARTICLE,
	SET_ARTICLE,
	DELETE_ARTICLE,
	SET_ARTICLES,
	VIEW_ARTICLES,
	VIEW_ARTICLE,
	ADD_COMMENT,
	GET_COMMENTS,
	ADD_VIEW,
	GET_VIEWS,
} from '../types';

const initialState = {
	articles: [],
	comments: [],
	comment: [],
	view: {},
	views: [],
	article: {},
	readArticle: {},
	readArticles: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_ARTICLE:
			return {
				...state,
				article: action.payload,
			};
		case SET_ARTICLES:
			return {
				...state,
				articles: action.payload,
			};
		case POST_ARTICLE:
			return {
				...state,
				articles: [action.payload, ...state.articles],
			};
		case DELETE_ARTICLE:
			let index = state.articles.findIndex(
				article => article.articleId === action.payload
			);
			index = state.articles.findIndex(
				article => article.articleId === action.payload
			);
			state.articles.splice(index, 1);
			return {
				...state,
			};
		case VIEW_ARTICLES:
			return {
				...state,
				readArticles: action.payload,
			};
		case VIEW_ARTICLE:
			return {
				...state,
				readArticle: action.payload,
			};
		case ADD_COMMENT:
			return {
				...state,
				comments: [action.payload, ...state.comment],
			};
		case GET_COMMENTS:
			return {
				...state,
				comments: action.payload,
			};
		case ADD_VIEW:
			return {
				...state,
				views: [action.payload, ...state.views],
			};
		case GET_VIEWS:
			return {
				...state,
				views: action.payload,
			};
		default:
			return state;
	}
}
