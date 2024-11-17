import SuggestionService from "@services/SuggestionService";
import isNullOrEmpty from "../../infrastructure/lib/utils/isNullOrEmpty";
import logger from "@lib/utils/logger";

export default class SuggestionUseCase {
  private suggestionService = new SuggestionService();

  async get(props: { token: string }) {
    try {
      const result = await this.suggestionService.get({ token: props.token });

      logger("SuggestionUseCase.get | response =>", result);

      if (isNullOrEmpty(result?.data)) {
        throw new Error(result?.meta?.message ?? "Failed to get suggestions");
      }

      return result;
    } catch (error: any) {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      } else {
        logger("SuggestionUseCase.get | error =>", error);
      }
      return null;
    }
  }
}
