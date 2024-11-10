import { IResponsePaginationEntity } from "./ResponseEntity";
import { IBaseState } from "./SharedEntity";

export interface ICustomerData {
  mobile_phone: string;
  nama: string;
}

export interface ICustomerTableState extends IBaseState {
  data: ICustomerData[];
}

export interface ICustomerResponse
  extends IResponsePaginationEntity<ICustomerData> {}
