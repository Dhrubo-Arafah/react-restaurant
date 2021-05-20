import DISHES from '../data/dishes' 
import COMMENTS from '../data/comments'
import { ADD_COMMENT } from './actionTypes';
import { combineReducers } from 'redux';

const dishReducer = (dishState=DISHES, action) => {
 return dishState
}

const commentReducer = (commentState = COMMENTS, action) => {
 if (action.type === ADD_COMMENT) {
  let comment = action.payload;
  comment.id = commentState.length;
  comment.date = new Date().toDateString()
  console.log(comment);
  return commentState.concat(comment)
 }
 return commentState
}

export const reducer = combineReducers({
 dishes: dishReducer,
 comments:commentReducer
})