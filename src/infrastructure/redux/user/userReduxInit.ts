import { IUserState } from "@domain/entities/UserEntity";

const userReduxInit: IUserState = {
  email: "",
  fullName: "",
  token: "",
};

export default userReduxInit;
