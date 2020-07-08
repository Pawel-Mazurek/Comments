import {
  ADD_FAVOURITE_COMMENT,
  REMOVE_FAVOURITE_COMMENT,
  ADD_COMMENT,
  ADD_COMMENTS,
} from "./actionTypes";

export const addFavouriteComment = (choosenComment) => ({
  type: ADD_FAVOURITE_COMMENT,
  payload: choosenComment,
});

export const removeFavouriteComment = (id) => ({
  type: REMOVE_FAVOURITE_COMMENT,
  payload: id,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const addComments = (comments) => ({
  type: ADD_COMMENTS,
  payload: comments,
});
