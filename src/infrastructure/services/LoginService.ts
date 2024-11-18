import logger from "../lib/utils/logger";
import { API } from "@api/APIInstance";
import { IResponseEntity } from "@domain/entities/ResponseEntity";
import { AxiosResponse } from "axios";
import { ILoginData, ILoginResponse } from "@domain/entities/LoginEntity";
import APIEndpoints from "@api/apiEndpoints";

class LoginService {
  async credentialLogin(
    email: string,
    password: string
  ): Promise<ILoginResponse | null> {
    try {
      const response: AxiosResponse<IResponseEntity<ILoginData>> =
        await API.post(
          APIEndpoints.login,
          JSON.stringify({
            email,
            password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

      logger("LoginService.credentialLogin-success", response.data);

      if (response.data) {
        const authResponse = response.data;

        return {
          ...authResponse,
          data: {
            token: authResponse.data.token,
            expires_at: authResponse.data.expires_at,
          },
        };
      } else {
        return response.data;
      }
    } catch (error: any) {
      logger("LoginService.credentialLogin-error", error);
      return error.response?.data;
    }
  }
}

export default LoginService;
