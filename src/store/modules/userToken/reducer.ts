import { tokenIsValid } from "../../../services/api";
import { SET_USER } from "./actionsType";
import { IAction, IUser } from "../../../types/index";

async function checkToken() {
  const user: IUser | string = (localStorage.getItem("user")) || "";

  if (user) {
    return await tokenIsValid(JSON.parse(user));
  }
  return "";
}

const user: IUser | string = await checkToken();

const userReducer = (state: IUser | string = user, action: IAction) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return user;
    default:
      return state;
  }
}

export default userReducer;