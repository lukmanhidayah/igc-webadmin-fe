import apiEndpoints from "@api/apiEndpoints";
import logger from "../lib/utils/logger";
import { API } from "@api/APIInstance";
import { AxiosResponse } from "axios";
import { IMemoResponse } from "@domain/entities/MemoEntity";

interface IGet {
  token: string;
}

class MemoService {
  async get(props: IGet): Promise<IMemoResponse | null> {
    try {
      logger("MemoService.get | token => ", props.token);

      const response: AxiosResponse<IMemoResponse> = await API.get(
        apiEndpoints.master + "&type=Memo",
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      logger("MemoService.get | response => ", response.data);

      return response.data
        ? { meta: response.data.meta, data: response.data.data }
        : null;
    } catch (error: any) {
      logger("MemoService.get | error => ", error);
      throw error;
    }
  }
}

export default MemoService;
