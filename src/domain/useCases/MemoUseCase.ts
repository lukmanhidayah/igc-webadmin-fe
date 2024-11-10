import MemoService from "@services/MemoService";
import isNullOrEmpty from "../../infrastructure/lib/utils/isNullOrEmpty";
import logger from "../../infrastructure/lib/utils/logger";

export default class MemoUseCase {
  private certificateService = new MemoService();

  async get(props: { token: string }) {
    try {
      const result = await this.certificateService.get({ token: props.token });

      logger("MemoUseCase.get | response =>", result);

      if (isNullOrEmpty(result?.data)) {
        throw new Error(result?.meta?.message ?? "Failed to certificate get");
      }

      return result;
    } catch (error: any) {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      } else {
        logger("MemoUseCase.get | error =>", error);
      }
      return null;
    }
  }
}
