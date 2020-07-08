import {
  ADD_FAVOURITE_COMMENT,
  REMOVE_FAVOURITE_COMMENT,
  ADD_COMMENT,
  ADD_COMMENTS,
} from "../actionTypes";

const initialState = {
  comments: [],
  choosenComments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE_COMMENT: {
      return {
        ...state,
        choosenComments: [...state.choosenComments, action.payload],
      };
    }

    case REMOVE_FAVOURITE_COMMENT: {
      let id = action.payload;
      return {
        ...state,
        choosenComments: state.choosenComments.filter(
          (choosenComments) => choosenComments.id !== id
        ),
      };
    }
    case ADD_COMMENT: {
      var maxId = state.comments
        .map((comment) => comment.id)
        .reduce((prevId, currentId) =>
          prevId > currentId ? prevId : currentId
        );
      action.payload.id = maxId + 1;
      return { ...state, comments: [...state.comments, action.payload] };
    }

    case ADD_COMMENTS: {
      return { ...state, comments: [...state.comments, ...action.payload] };
    }

    default:
      return state;
  }
}
