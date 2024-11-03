export interface IResponseEntity<T> {
  meta: {
    code: string;
    message: string;
  };
  data: T;
}