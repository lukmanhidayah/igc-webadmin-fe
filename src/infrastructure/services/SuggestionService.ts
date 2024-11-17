import apiEndpoints from "@api/apiEndpoints";
import logger from "../lib/utils/logger";
import { API } from "@api/APIInstance";
import { AxiosResponse } from "axios";
import { ISuggestionResponse } from "@domain/entities/SuggestionEntity";

interface IGet {
  token: string;
}

class SuggestService {
  async get(props: IGet): Promise<ISuggestionResponse> {
    try {
      logger("SuggestService.get | token => ", props.token);

      const response: AxiosResponse<ISuggestionResponse> = await API.get(
        apiEndpoints.suggestions,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      logger("SuggestService.get | response => ", response.data);

      return response.data;
    } catch (error: any) {
      logger("SuggestService.get | error => ", error);
      throw error;
    }
  }
}

export default SuggestService;
