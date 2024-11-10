import CertificateService from "@services/CertificateService";
import isNullOrEmpty from "../../infrastructure/lib/utils/isNullOrEmpty";
import logger from "../../infrastructure/lib/utils/logger";

export default class CertificateUseCase {
  private certificateService = new CertificateService();

  async get(props: { token: string }) {
    try {
      const result = await this.certificateService.get({ token: props.token });

      logger("CertificateUseCase.getProfile | response =>", result);

      if (isNullOrEmpty(result?.data)) {
        throw new Error(result?.meta?.message ?? "Failed to certificate get");
      }

      return result;
    } catch (error: any) {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      } else {
        logger("CertificateUseCase.getProfile | error =>", error);
      }
      return null;
    }
  }
}
