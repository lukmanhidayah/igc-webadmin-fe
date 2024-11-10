import { ICertificateData, ICertificateTableState } from "@domain/entities/CertificateEntity";
import CertificateUseCase from "@domain/useCases/CertificateUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";

class CertificateViewModel {
  private certificateUseCase: CertificateUseCase;
  private setTable: (value: SetStateAction<ICertificateTableState>) => void;
  private setIsModalOpen: (value: SetStateAction<boolean>) => void;
  private resetForm: () => void;

  constructor(
    certificateUseCase: CertificateUseCase,
    setTable: (value: SetStateAction<ICertificateTableState>) => void,
    setIsModalOpen: (value: SetStateAction<boolean>) => void,
    resetForm: () => void
  ) {
    this.certificateUseCase = certificateUseCase;
    this.setTable = setTable;
    this.setIsModalOpen = setIsModalOpen;
    this.resetForm = resetForm;
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

  handleModalOpen = () => {
    this.setIsModalOpen(true);
  };

  handleModalClose = () => {
    this.setIsModalOpen(false);
    this.resetForm();
  };

  handleFormSubmit: SubmitHandler<ICertificateData> = (data) => {
    console.log(data);
    this.setIsModalOpen(false);
  };
}

export default CertificateViewModel;
