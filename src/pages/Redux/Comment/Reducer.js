export const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT_REQUEST":
    case "DELETE_COMMENT_REQUEST":
    case "FETCH_COMMENT_REQUEST":
      return { ...state, loading: true, error: null };

    case "CREATE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.comment],
        error: null,
      };

    case "DELETE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(
          (comment) => comment.id !== action.commentId
        ),
        error: null,
      };

    case "FETCH_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: action.comments,
        error: null,
      };

    case "FETCH_COMMENT_FAILURE":
    case "CREATE_COMMENT_FAILURE":
    case "DELETE_COMMENT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
