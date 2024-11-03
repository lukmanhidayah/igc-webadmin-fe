import isNullOrEmpty from "@lib/utils/isNullOrEmpty";
import logger from "@lib/utils/logger";
import AuthService from "@services/AuthService";

export default class AuthUseCase {
  private authService = new AuthService();

  async credentialLogin(username: string, password: string, token: string) {
    const result = await this.authService.credentialLogin(
      username,
      password,
      token
    );

    logger("AuthUseCase.credentialLogin", result);

    if (isNullOrEmpty(result?.data.token)) {
      throw new Error(result?.message ?? "Login failed");
    }

    return result?.data;
  }

  async googleLogin() {
    const result = await this.authService.googleLogin();
    if (isNullOrEmpty(result)) {
      throw new Error("Google login failed");
    }

    return result;
  }

  async googleLogout() {
    await this.authService.googleLogout();
  }
}
