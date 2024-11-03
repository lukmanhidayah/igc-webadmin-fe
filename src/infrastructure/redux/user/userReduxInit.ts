interface IUserRedux {
  email: string;
  fullName: string;
  token: string;
}

const userReduxInit: IUserRedux = {
  email: "",
  fullName: "",
  token: "",
};

export default userReduxInit;
