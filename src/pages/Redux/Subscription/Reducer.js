export const initialState = {
  userSubscription: null,
  loading: false,
  error: null,
};

export const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_SUBSCRIPTION_REQUEST":
    case "UPGRADE_SUBSCRIPTION_REQUEST":
      return { ...state, loading: true, error: null };

    case "GET_USER_SUBSCRIPTION_SUCCESS":
      return {
        ...state,
        loading: false,
        userSubscription: action.payload,
        error: null,
      };

    case "UPGRADE_SUBSCRIPTION_SUCCESS":
      return {
        ...state,
        loading: false,
        userSubscription: action.payload,
        error: null,
      };

    case "GET_USER_SUBSCRIPTION_FAILURE":
    case "UPGRADE_SUBSCRIPTION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
