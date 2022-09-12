import { registerUser, sigIn } from "../../../services/api";
import { setUser } from "./actions";

export const setUserThunk: any = (user:any) => async (dispatch: (action: any) => any) => {
  const userData = await sigIn(user);
  dispatch(setUser(userData));
};

export const setUserThunkRegister: any = (user:any) => async (dispatch: (action: any) => any) => {
  const userData = await registerUser(user);
  dispatch(setUser(userData));
};

export const logoutUser: any = () => (dispatch: (action: any) => any) => {
  dispatch(setUser(""));
};