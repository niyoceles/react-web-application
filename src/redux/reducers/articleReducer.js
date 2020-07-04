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
	SEARCH_ARTICLES,
	RELATED_ARTICLES,
	NO_FOUND,
	GET_ALL_COMMENTS,
	SET_COMMENT
} from '../types';

const initialState = {
	articles: [],
	comments: [],
	allComments: [],
	comment: [],
	view: {},
	views: [],
	article: {},
	readArticle: {},
	readArticles: [],
	relatedArticles: [],
	searchArticles: null,
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
		case RELATED_ARTICLES:
			return {
				...state,
				relatedArticles: action.payload,
			};
		case SEARCH_ARTICLES:
			return {
				...state,
				searchArticles: action.payload,
			};
		case NO_FOUND:
			return {
				...state,
				searchArticles: action.payload,
			};
		case GET_ALL_COMMENTS:
			return {
				...state,
				allComments: action.payload,
			};
		case SET_COMMENT:
			return {
				...state,
				comment: action.payload,
			};
		default:
			return state;
	}
}
