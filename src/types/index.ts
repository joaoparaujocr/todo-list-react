export interface IUser {
  acessToken: string;
  user: {
    email: string;
    name: string;
    id: number
  }
}

export interface IAction {
  type: string;
  user: any
}