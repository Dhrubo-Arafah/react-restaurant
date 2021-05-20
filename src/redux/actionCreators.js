import { ADD_COMMENT, DISHES_LOADING, LOAD_DIHSES } from "./actionTypes"

export const addComment = (dishId, author, rating, comment) => ({
 type: ADD_COMMENT,
 payload: {
  dishId: dishId,
  author: author,
  rating: rating,
  comment: comment
 }
})

export const LoadDishes = dishes => ({
 type: LOAD_DIHSES,
 payload: dishes
})

export const dishesLoading = () => ({ type: DISHES_LOADING }
)