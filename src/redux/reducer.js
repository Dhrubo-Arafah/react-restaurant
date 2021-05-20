import DISHES from '../data/dishes' 
import COMMENTS from '../data/comments'
import { ADD_COMMENT } from './actionTypes';

const initialState = {
 dishes:DISHES,
 comments:COMMENTS
}

export const reducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_COMMENT:
   let comment = action.payload
   comment.id = state.comment.length
   
  default:
   return state;
 }
}