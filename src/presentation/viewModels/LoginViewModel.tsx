import AuthUseCase from "@domain/useCases/AuthUseCase";
import menus from "@lib/utils/menus";
import { setSidebar } from "@redux/dashboard/dashboardReduxReducer";
import { setUser } from "@redux/user/userReduxReducer";

interface ILogin {
  email: string;
  password: string;
}

interface ILoginViewModel {
  login: (props: ILogin) => void;
}

class LoginViewModel implements ILoginViewModel {
  private authUseCase: AuthUseCase;
  private dispatch: any;

  constructor(authUseCase: AuthUseCase, dispatch: any) {
    this.authUseCase = authUseCase;
    this.dispatch = dispatch;
  }

  async login(props: ILogin) {
    try {
      const result = {
        email: props.email,
        fullName: "Admin IGC",
        token: "7ac4f605-6584-499b-9194-4e9e62db8975",
      };

      this.dispatch(setSidebar(menus));

      this.dispatch(
        setUser({
          email: result?.email,
          fullName: result?.fullName,
          token: result?.token,
        })
      );
    } catch (error: any) {
      throw new Error(error?.message || "Login failed");
    }
  }

  async loginWithGoogle() {
    try {
      // Fetch the google token
      const resultGoogleLogin = await this.authUseCase.googleLogin();

      // Fetch the user token
      const result = await this.authUseCase.credentialLogin(
        "",
        "",
        resultGoogleLogin!.token
      );

      this.dispatch(setSidebar(menus));

      this.dispatch(
        setUser({
          email: resultGoogleLogin?.email,
          fullName: resultGoogleLogin?.fullName,
          token: result?.token,
        })
      );
    } catch (error: any) {
      throw new Error(error?.message || "Login with Google failed");
    }
  }
}

export default LoginViewModel;
