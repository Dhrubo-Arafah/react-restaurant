import DISHES from '../data/dishes' 
import COMMENTS from '../data/comments'

const initialState = {
 dishes:DISHES,
 comments:COMMENTS
}

const reducer = (state=initialState, action) => {
 return state;
}

export default reducer