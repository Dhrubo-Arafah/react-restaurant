import DISHES from "../data/dishes"
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from "./actionTypes"

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
 type: LOAD_DISHES,
 payload: dishes
})

export const dishesLoading = () => ({ type: DISHES_LOADING })

export const fetchDishes = () => {
 return dispatch => {
  dispatch(dishesLoading())
  setTimeout(() => { dispatch(LoadDishes(DISHES))}, 2000)
 }
}