import { IMemoTableState } from "@domain/entities/MemoEntity";
import MemoUseCase from "@domain/useCases/MemoUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";

class MemoViewModel {
  private memoUseCase: MemoUseCase;
  private setTable: (value: SetStateAction<IMemoTableState>) => void;

  constructor(
    memoUseCase: MemoUseCase,
    setTable: (value: SetStateAction<IMemoTableState>) => void
  ) {
    this.memoUseCase = memoUseCase;
    this.setTable = setTable;
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
          total: response.meta.pagination.total,
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
}

export default MemoViewModel;
