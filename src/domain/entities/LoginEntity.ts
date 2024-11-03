import { IResponseEntity } from "./ResponseEntity";

/**
 * Interface representing the state of a user in the application.
 * @interface ILoginData
 * @property {string} token - The authentication token for the user.
 * @property {string} expires_at - The expiration time of the authentication token.
 */
export interface ILoginData {
  token: string;
  expires_at: string;
}

/**
 * Interface representing the authentication form.
 *
 * @interface ILoginRequest
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */
export interface ILoginRequest {
  email: string;
  password: string;
}

/**
 * Interface representing the login response.
 * @interface ILoginResponse
 * @extends {IResponseEntity<ILoginData>}
 */
export interface ILoginResponse extends IResponseEntity<ILoginData>{}