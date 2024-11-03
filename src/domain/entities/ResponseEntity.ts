export interface IResponseEntity<T> {
  code: number;
  message: string;
  status: number;
  data: T;
}
