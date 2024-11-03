import APIEndpoints from "@api/APIEndpoints";
import logger from "@lib/utils/logger";
import { APIPhoenix } from "@api/APIInstance";
import { IResponseEntity } from "@domain/entities/ResponseEntity";
import { AxiosResponse } from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { IUserState } from "@domain/entities/UserEntity";

class AuthService {
  private auth = getAuth();
  private provider = new GoogleAuthProvider();

  async credentialLogin(
    username: string,
    password: string,
    token: string
  ): Promise<IResponseEntity<IUserState> | null> {
    try {
      const response: AxiosResponse<IResponseEntity<{ token: string }>> =
        await APIPhoenix.post(APIEndpoints.login["/"], {
          username,
          password,
          token,
        });

      logger("AuthService.credentialLogin", response.data);

      if (response.data) {
        const authResponse = response.data;

        return {
          ...authResponse,
          data: {
            email: username,
            fullName: username.split("@")[0],
            token: authResponse.data.token,
          },
        };
      } else {
        return null;
      }
    } catch (error) {
      logger("AuthService.credentialLogin", error);
      return null;
    }
  }

  async googleLogin(): Promise<IUserState | null> {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const token = await result.user.getIdToken();

      logger("AuthService.googleLogin", result, token);

      if (!token) {
        return null;
      }

      return {
        email: result.user.email ?? "",
        fullName: result.user.displayName ?? "",
        token: token ?? "",
      };
    } catch (error) {
      logger("AuthService.googleLogin", error);
      return null;
    }
  }

  async googleLogout(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      logger("AuthService.googleLogout", error);
    }
  }
}

export default AuthService;
