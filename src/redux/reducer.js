import DISHES from '../data/dishes' 
import COMMENTS from '../data/comments'
import { ADD_COMMENT } from './actionTypes';

const initialState = {
 dishes:DISHES,
 comments:COMMENTS
}

export const reducer = (state = initialState, action) => {
 if (action.type === ADD_COMMENT) {
  let comment = action.payload;
  comment.id = state.comments.length;
  comment.date = new Date().toDateString()
  console.log(comment);
  return {
   ...state,
   comments:state.comments.concat(comment)
  }
 }

 return state;
}