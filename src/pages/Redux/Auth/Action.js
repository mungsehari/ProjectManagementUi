import { API_BASE_URL, api } from "@/config/api";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  try {
    const { data } = await api.post("/auth/signup", userData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
    }
    console.log("registered successfully", data);
  } catch (error) {
    console.log(error);
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signing`, userData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }
    console.log("login successfully", data);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    dispatch({ type: "GET_USER_SUCCESS", payload: data });

    console.log("get User successfully", data);
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT_REQUEST" });
  localStorage.clear();
};
