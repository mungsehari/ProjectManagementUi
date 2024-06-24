import { api } from "@/config/api";

export const getUserSubscription = (jwt) => async (dispatch) => {
  dispatch({ type: "GET_USER_SUBSCRIPTION_REQUEST" });
  try {
    const response = await api.get(`/api/subscription/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: "GET_USER_SUBSCRIPTION_SUCCESS", payload: response.data });

    console.log("user subscription", response.data);
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_USER_SUBSCRIPTION_FAILURE", error: error.message });
  }
};

export const upgradeSubscription =
  ({ planType }) =>
  async (dispatch) => {
    dispatch({ type: "UPGRADE_SUBSCRIPTION_REQUEST" });
    try {
      const response = await api.patch(`/api/subscription/upgrade`, null, {
        headers: {
          planType: planType,
        },
      });

      dispatch({
        type: "UPGRADE_SUBSCRIPTION_SUCCESS",
        payload: response.data,
      });

      console.log("user subscription", response.data);
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPGRADE_SUBSCRIPTION_FAILURE", error: error.message });
    }
  };
