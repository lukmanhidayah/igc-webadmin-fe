import { IResponseEntity } from "./ResponseEntity";

/**
 * Interface representing the data of the registration response.
 * @interface IRegistrationData
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} updated_at - The last update time of the user data.
 * @property {string} created_at - The creation time of the user data.
 * @property {number} id - The ID of the user.
 */
export interface IRegistrationData {
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
  id: number;
}

/**
 * Interface representing the registration request.
 * @interface IRegistrationRequest
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} password_confirmation - The password confirmation.
 */
export interface IRegistrationRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

/**
 * Interface representing the registration response.
 * @interface IRegistrationResponse
 * @extends {IResponseEntity<IRegistrationData>}
 */
export interface IRegistrationResponse
  extends IResponseEntity<IRegistrationData> {}