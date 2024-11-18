import TrashService from "@services/TrashService";
import isNullOrEmpty from "../../infrastructure/lib/utils/isNullOrEmpty";
import logger from "@lib/utils/logger";

export default class TrashUseCase {
  private trashService = new TrashService();

  async get(props: { token: string }) {
    try {
      const result = await this.trashService.get({ token: props.token });

      logger("TrashUseCase.get | response =>", result);

      if (isNullOrEmpty(result?.data)) {
        throw new Error(result?.meta?.message ?? "Failed to trash get");
      }

      return result;
    } catch (error: any) {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      } else {
        logger("TrashUseCase.get | error =>", error);
      }
      return null;
    }
  }
  async post(props: { token: string; data: any }) {
    try {
      const result = await this.trashService.post(props);

      logger("TrashUseCase.post | response =>", result);

      if (isNullOrEmpty(result?.data)) {
        throw new Error(result?.meta?.message ?? "Failed to trash post");
      }

      return result;
    } catch (error: any) {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      } else {
        logger("TrashUseCase.post | error =>", error);
      }
      return null;
    }
  }
}
