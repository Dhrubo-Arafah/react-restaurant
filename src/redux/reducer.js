import COMMENTS from '../data/comments'
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from './actionTypes';
import { combineReducers } from 'redux';

const initialDishState = {
 isLoading: false,
 dishes: [],
}

const dishReducer = (dishState = initialDishState, action) => {
 switch (action.type) {
  case DISHES_LOADING:
   return {
    ...dishState,
    isLoading: true,
    dishes:[]
   }
  
  case LOAD_DISHES:
   return {
    ...dishState,
    isLoading: false,
    dishes: action.payload
   }
  
  default: return dishState
 }
}

const commentReducer = (commentState = COMMENTS, action) => {
 switch (action.type) {
  case ADD_COMMENT:
   let comment = action.payload;
   comment.id = commentState.length;
   comment.date = new Date().toDateString()
   console.log(comment);
   return commentState.concat(comment)
  default: return commentState
 }
}

export const reducer = combineReducers({
 dishes: dishReducer,
 comments: commentReducer
})