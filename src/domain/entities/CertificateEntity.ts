import { IResponsePaginationEntity } from "./ResponseEntity";
import { IBaseState } from "./SharedEntity";

export interface ICertificateData {
  id: string;
  identifier: string;
  type: string;
  status: string;
  member_phone_number: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  updated_by: any;
  printed_at: any;
  print_version: number;
  additional_comment: string;
  additional_data: string;
  attributes: {
    id_master: string;
    object_name: string;
    object_image: any;
    measurement: string;
    shape: string;
    clarity: string;
    transparency: string;
    cut: string;
    color: string;
    weight: string;
    comments: string;
    origins: string;
  };
}

export interface ICertificateTableState extends IBaseState {
  data: ICertificateData[];
}

export interface ICertificateResponse extends IResponsePaginationEntity<ICertificateData> {}
