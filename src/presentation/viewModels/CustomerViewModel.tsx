import {
  ICustomerOption,
  ICustomerTableState,
} from "@domain/entities/CustomerEntity";
import CustomerUseCase from "@domain/useCases/CustomerUseCase";
import logger from "@lib/utils/logger";
import { SetStateAction } from "react";

class CustomerViewModel {
  private customerUseCase: CustomerUseCase;

  constructor(customerUseCase: CustomerUseCase) {
    this.customerUseCase = customerUseCase;
  }

  async getCustomer(
    token: string,
    setTable: (value: SetStateAction<ICustomerTableState>) => void
  ) {
    try {
      setTable((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.customerUseCase.get({ token });

      logger("CustomerViewModel.getCustomer | response => ", response);

      if (response) {
        setTable((prevState) => ({
          ...prevState,
          data: response.data,
          total: response.meta?.pagination?.total,
        }));
      }
    } catch (error: any) {
      logger("CustomerViewModel.getCustomer | error => ", error);
      throw error;
    } finally {
      setTable((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }

  async getCustomerOption(
    token: string,
    setOption: (value: SetStateAction<ICustomerOption>) => void
  ) {
    try {
      setOption((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await this.customerUseCase.get({ token });

      logger("CustomerViewModel.getCustomerOption | response => ", response);

      if (response) {
        const data = response.data.map((item) => ({
          value: item.mobile_phone,
          label: item.nama + " - " + item.mobile_phone,
        }));
        setOption((prevState) => ({
          ...prevState,
          data,
        }));
      }
    } catch (error: any) {
      logger("CustomerViewModel.getCustomerOption | error => ", error);
      throw error;
    } finally {
      setOption((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }
}

export default CustomerViewModel;
