import { IResponsePaginationEntity } from "./ResponseEntity";
import { IBaseState } from "./SharedEntity";

export interface ICustomerData {
  mobile_phone: string;
  nama: string;
}

export interface ICustomerTableState extends IBaseState {
  data: ICustomerData[];
}

export interface ICustomerOption {
  isLoading: boolean;
  data: {
    label: string;
    value: string;
  }[];
}

export interface ICustomerResponse
  extends IResponsePaginationEntity<ICustomerData> {}
