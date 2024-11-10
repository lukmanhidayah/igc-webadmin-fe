import { ICustomerTableState } from "@domain/entities/CustomerEntity";
import CustomerUseCase from "@domain/useCases/CustomerUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";

class CustomerViewModel {
  private customerUseCase: CustomerUseCase;
  private setTable: (value: SetStateAction<ICustomerTableState>) => void;

  constructor(
    customerUseCase: CustomerUseCase,
    setTable: (value: SetStateAction<ICustomerTableState>) => void
  ) {
    this.customerUseCase = customerUseCase;
    this.setTable = setTable;
  }

  async getCustomer(token: string) {
    try {
      this.setTable((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.customerUseCase.get({ token });

      logger("CustomerViewModel.getCustomer | response => ", response);

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
      logger("CustomerViewModel.getCustomer | error => ", error);
      this.setTable((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }
}

export default CustomerViewModel;
