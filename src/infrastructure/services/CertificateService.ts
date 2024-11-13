import apiEndpoints from "@api/apiEndpoints";
import logger from "../lib/utils/logger";
import { API } from "@api/APIInstance";
import { AxiosResponse } from "axios";
import { ICertificateResponse } from "@domain/entities/CertificateEntity";

interface IGet {
  token: string;
}

class CertificateService {
  async get(props: IGet): Promise<ICertificateResponse> {
    try {
      logger("CertificateService.get | token => ", props.token);

      const response: AxiosResponse<ICertificateResponse> = await API.get(
        apiEndpoints.master,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      logger("CertificateService.get | response => ", response.data);

      return response.data;
    } catch (error: any) {
      logger("CertificateService.get | error => ", error);
      throw error;
    }
  }
}

export default CertificateService;
