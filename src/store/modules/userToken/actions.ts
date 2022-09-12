import { SET_USER } from "./actionsType";
import { IUser } from "../../../types/index"

export const setUser = (user: IUser | string) => ({
  type: SET_USER,
  user,
});
