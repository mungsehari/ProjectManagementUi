import { api } from "@/config/api";

export const fetchIssues = (id) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_ISSUES_REQUEST" });
    try {
      const response = await api.get(`/api/issues/project/${id}`);
      console.log("fetch issue", response.data);
      dispatch({ type: "FETCH_ISSUES_SUCCESS", issues: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "FETCH_ISSUES_FAILURE", error: error.message });
    }
  };
};
export const createIssue = (issueData) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_ISSUES_REQUEST" });
    try {
      const response = await api.post("/api/issues", issueData);
      console.log("create issue", response.data);
      dispatch({ type: "CREATE_ISSUES_SUCCESS", issues: response.data });
      console.log("create issue successfully ", response.data);
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "CREATE_ISSUES_FAILURE", error: error.message });
    }
  };
};

export const fetchIssuesById = (id) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_ISSUES_BY_ID_REQUEST" });
    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("fetch issue by id", response.data);
      dispatch({ type: "FETCH_ISSUES_BY_ID_SUCCESS", issues: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "FETCH_ISSUES_BY_ID_FAILURE", error: error.message });
    }
  };
};

export const updateIssueStatus = ({ id, status }) => {
  return async (dispatch) => {
    dispatch({ type: "UPDATE_ISSUE_STATUS_REQUEST" });
    try {
      const response = await api.put(`/api/issues/${id}/status/${status}`);
      console.log("update issue id", response.data);
      dispatch({ type: "UPDATE_ISSUE_STATUS_SUCCESS", issues: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "UPDATE_ISSUE_STATUS_FAILURE", error: error.message });
    }
  };
};

export const assignedUserToIssue = ({ issueId, userId }) => {
  return async (dispatch) => {
    dispatch({ type: "ASSIGNED_ISSUE_TO_USER_REQUEST" });
    try {
      const response = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      console.log("assignee issue ---", response.data);
      dispatch({
        type: "ASSIGNED_ISSUE_TO_USER_SUCCESS",
        issues: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: "ASSIGNED_ISSUE_TO_USER_FAILURE",
        error: error.message,
      });
    }
  };
};

export const deleteIssue = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_ISSUES_REQUEST" });
    try {
      const response = await api.delete(`/api/issues/${issueId}`);
      console.log("delete issue", response.data);
      dispatch({ type: "DELETE_ISSUES_SUCCESS", issueId });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: "DELETE_ISSUES_FAILURE", error: error.message });
    }
  };
};
