import {
  POST_ARTICLE,
  SET_ARTICLE,
  DELETE_ARTICLE,
  SET_ARTICLES
} from '../types';

const initialState = {
  articles: [],
  article: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case POST_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };
    case DELETE_ARTICLE:
      let index = state.articles.findIndex(
        article => article.articleId === action.payload
      );
      index = state.articles.findIndex(article => article.articleId === action.payload);
      state.articles.splice(index, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}
