import { ITrashTableState } from "@domain/entities/TrashEntity";
import TrashUseCase from "@domain/useCases/TrashUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";

class TrashViewModel {
  private trashUseCase: TrashUseCase;
  private token: string;

  constructor(trashUseCase: TrashUseCase, token: string) {
    this.trashUseCase = trashUseCase;
    this.token = token;
  }

  async getTrash(setTable: (value: SetStateAction<ITrashTableState>) => void) {
    try {
      setTable((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.trashUseCase.get({ token: this.token });

      logger("TrashViewModel.getTrash | response => ", response);

      if (response) {
        setTable((prevState) => ({
          ...prevState,
          data: response.data,
          total: response.meta?.pagination?.total,
        }));
      }

      setTable((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    } catch (error: any) {
      logger("TrashViewModel.getTrash | error => ", error);
      setTable((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }
}

export default TrashViewModel;
