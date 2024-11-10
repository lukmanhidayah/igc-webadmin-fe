import { IMemoData, IMemoTableState } from "@domain/entities/MemoEntity";
import MemoUseCase from "@domain/useCases/MemoUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";

class MemoViewModel {
  private memoUseCase: MemoUseCase;
  private setTable: (value: SetStateAction<IMemoTableState>) => void;
  private setIsModalOpen: (value: SetStateAction<boolean>) => void;
  private resetForm: () => void;

  constructor(
    memoUseCase: MemoUseCase,
    setTable: (value: SetStateAction<IMemoTableState>) => void,
    setIsModalOpen: (value: SetStateAction<boolean>) => void,
    resetForm: () => void
  ) {
    this.memoUseCase = memoUseCase;
    this.setTable = setTable;
    this.setIsModalOpen = setIsModalOpen;
    this.resetForm = resetForm;
  }

  async getMemo(token: string) {
    try {
      this.setTable((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.memoUseCase.get({ token });

      logger("MemoViewModel.getMemo | response => ", response);

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
      logger("MemoViewModel.getMemo | error => ", error);
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

  handleFormSubmit: SubmitHandler<IMemoData> = (data) => {
    console.log(data);
    this.setIsModalOpen(false);
  };
}

export default MemoViewModel;
