import apiEndpoints from "@api/apiEndpoints";
import logger from "../lib/utils/logger";
import { API } from "@api/APIInstance";
import { AxiosResponse } from "axios";
import {
  ITrashCreateResponse,
  ITrashResponse,
} from "@domain/entities/TrashEntity";

interface IGet {
  token: string;
}

interface IPost {
  token: string;
  data: any;
}

class TrashService {
  async get(props: IGet): Promise<ITrashResponse> {
    try {
      logger("TrashService.get | token => ", props.token);

      const response: AxiosResponse<ITrashResponse> = await API.get(
        apiEndpoints.trash,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      logger("TrashService.get | response => ", response.data);

      return response.data;
    } catch (error: any) {
      logger("TrashService.get | error => ", error);
      throw error;
    }
  }
  async post(props: IPost): Promise<ITrashCreateResponse> {
    try {
      logger("TrashService.post | payload => ", props);

      const response: AxiosResponse<ITrashCreateResponse> = await API.post(
        apiEndpoints.trash,
        props.data,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      logger("TrashService.post | response => ", response.data);

      return response.data;
    } catch (error: any) {
      logger("TrashService.post | error => ", error);
      throw error;
    }
  }
}

export default TrashService;
