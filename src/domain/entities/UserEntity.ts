/**
 * Interface representing the redux state of a user and api response.
 *
 * @interface IUserState
 * @property {string} email - The email address of the user.
 * @property {string} fullName - The full name of the user.
 * @property {string} token - The authentication token of the user.
 */
export interface IUserState {
  token: string;
  expires_at: string;
}

/**
 * Interface representing the authentication form.
 *
 * @interface IAuthForm
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */
export interface IAuthForm {
  email: string;
  password: string;
}
