import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
} from "../Reducers/userSlice";
import axios from "../../utils/axios";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    (error.response.data);
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/user/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/user/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signinerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/user/signout");
    dispatch(removeUser());
  } catch (error) {
    (error.response.data);
  }
};
