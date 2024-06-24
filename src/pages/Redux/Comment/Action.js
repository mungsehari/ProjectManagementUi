import { api } from "@/config/api";

export const createComment = (commentData) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_COMMENT_REQUEST" });
    try {
      const response = await api.post(`/api/comments`, commentData);
      console.log("comment created", response.data);
      dispatch({ type: "CREATE_COMMENT_SUCCESS", comment: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "CREATE_COMMENT_FAILURE", error: error.message });
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_COMMENT_REQUEST" });
    try {
      const response = await api.delete(`/api/comments/${commentId}`);
      console.log("comment created", response.data);
      dispatch({ type: "DELETE_COMMENT_SUCCESS", commentId });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "DELETE_COMMENT_FAILURE", error: error.message });
    }
  };
};
export const fetchComment = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_COMMENT_REQUEST" });
    try {
      const response = await api.get(`/api/comments/${issueId}`);
      console.log("comment created", response.data);
      dispatch({ type: "FETCH_COMMENT_SUCCESS", comments: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "FETCH_COMMENT_FAILURE", error: error.message });
    }
  };
};
