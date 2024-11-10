import isNullOrEmpty from "../../infrastructure/lib/utils/isNullOrEmpty";
import logger from "../../infrastructure/lib/utils/logger";
import LoginService from "@services/LoginService";

export default class LoginUseCase {
  private loginService = new LoginService();

  async credentialLogin(email: string, password: string) {
    const result = await this.loginService.credentialLogin(email, password);

    logger("LoginUseCase.credentialLogin", result);

    if (isNullOrEmpty(result?.data?.token)) {
      throw new Error(result?.meta?.message ?? "Login failed");
    }

    return result?.data;
  }
}
