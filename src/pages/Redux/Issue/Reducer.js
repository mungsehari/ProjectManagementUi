export const initialState = {
  issues: [],
  loading: false,
  error: null,
  issueDetails: null,
};

export const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ISSUES_REQUEST":
    case "CREATE_ISSUES_REQUEST":
    case "DELETE_ISSUES_REQUEST":
    case "FETCH_ISSUES_BY_ID_REQUEST":
    case "UPDATE_ISSUE_STATUS_REQUEST":
    case "ASSIGNED_ISSUE_TO_USER_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_ISSUES_SUCCESS":
      return {
        ...state,
        loading: false,
        issues: action.issues,
        error: null,
      };

    case "FETCH_ISSUES_BY_ID_SUCCESS":
    case "UPDATE_ISSUE_STATUS_SUCCESS":
      return {
        ...state,
        loading: false,
        issueDetails: action.issues,
        error: null,
      };
    case "CREATE_ISSUES_SUCCESS":
      return {
        ...state,
        loading: false,
        issues: [...state.issues, action.issues],
        error: null,
      };
    case "ASSIGNED_ISSUE_TO_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        issues: state.issues.map((issue) =>
          issue.id === action.issues.id ? action.issues : issue
        ),
      };
    case "DELETE_ISSUES_SUCCESS":
      return {
        ...state,
        loading: false,
        issues: state.issues.filter((issue) => issue.id !== action.issueId),
        error: null,
      };

    case "FETCH_ISSUES_FAILURE":
    case "CREATE_ISSUES_FAILURE":
    case "DELETE_ISSUES_FAILURE":
    case "ASSIGNED_ISSUE_TO_USER_FAILURE":
    case "UPDATE_ISSUE_STATUS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
