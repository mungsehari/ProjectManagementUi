import { searchProjects } from "./Action";

export const initialState = {
  projects: [],
  loading: false,
  error: null,
  projectDetaills: null,
  searchProjects: [],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS_REQUEST":
    case "SEARCH_PROJECTS_REQUEST":
    case "CREATE_PROJECT_REQUEST":
    case "FETCH_PROJECT_BY_ID_REQUEST":
    case "DELETE_PROJECT_REQUEST":
    case "ACCESS_INVITATION_REQUEST":
    case "INVITE_TO_PROJECTS_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: action.projects,
        error: null,
      };

    case "SEARCH_PROJECT_SUCCESS":
      return {
        ...state,
        loading: false,
        searchProjects: action.projects,
        error: null,
      };
    case "INVITE_TO_PROJECTS_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
        error: null,
      };

    case "ACCESS_INVITATION_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: state.projects.map((project) =>
          project.id === action.payload.projectId ? action.payload : project
        ),
        error: null,
      };

    case "CREATE_PROJECT_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.project],
        error: null,
      };

    case "FETCH_PROJECT_BY_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        projectDetaills: action.project,
        error: null,
      };

    case "DELETE_PROJECT_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: state.projects.filter(
          (project) => project.id !== action.projectId
        ),
        error: null,
      };

    default:
      return state;
  }
};
