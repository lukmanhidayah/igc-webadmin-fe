import apiEndpoints from "@api/apiEndpoints";
import logger from "../lib/utils/logger";
import { API } from "@api/APIInstance";
import { AxiosResponse } from "axios";
import { ICustomerResponse } from "@domain/entities/CustomerEntity";

interface IGet {
  token: string;
}

class CustomerService {
  async get(props: IGet): Promise<ICustomerResponse | null> {
    try {
      logger("CustomerService.get | token => ", props.token);

      const response: AxiosResponse<ICustomerResponse> = await API.get(
        apiEndpoints.members,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      logger("CustomerService.get | response => ", response.data);

      return response.data
        ? { meta: response.data.meta, data: response.data.data }
        : null;
    } catch (error: any) {
      logger("CustomerService.get | error => ", error);
      throw error;
    }
  }
}

export default CustomerService;
