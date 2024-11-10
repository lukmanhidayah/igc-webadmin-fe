import { ICertificateTableState } from "@domain/entities/CertificateEntity";
import CertificateUseCase from "@domain/useCases/CertificateUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";

class CertificateViewModel {
  private certificateUseCase: CertificateUseCase;
  private setTable: (value: SetStateAction<ICertificateTableState>) => void;

  constructor(
    certificateUseCase: CertificateUseCase,
    setTable: (value: SetStateAction<ICertificateTableState>) => void
  ) {
    this.certificateUseCase = certificateUseCase;
    this.setTable = setTable;
  }

  async getCertificate(token: string) {
    try {
      this.setTable((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.certificateUseCase.get({ token });

      logger("CertificateViewModel.getCertificate | response => ", response);

      if (response) {
        this.setTable((prevState) => ({
          ...prevState,
          data: response.data,
          total: response.meta?.pagination?.total,
        }));
      }

      this.setTable((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    } catch (error: any) {
      logger("CertificateViewModel.getCertificate | error => ", error);
      this.setTable((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }
}

export default CertificateViewModel;
