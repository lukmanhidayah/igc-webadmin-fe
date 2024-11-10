import CustomerColumn from "@components/customer/CustomerColumn";
import CustomerTable from "@components/customer/CustomerTable";
import HeaderContent from "@components/dashboard/layout/HeaderContent";
import Button from "@components/form/button/Button";
import PlusSquareIcon from "@components/icon/PlusSquareIcon";
import { ICustomerTableState } from "@domain/entities/CustomerEntity";
import CustomerUseCase from "@domain/useCases/CustomerUseCase";
import { useLanguage } from "@lib/hooks/useLanguage";
import logger from "@lib/utils/logger";
import { selectToken } from "@redux/user/userReduxSelector";
import CustomerViewModel from "@viewModels/CustomerViewModel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CustomerPage = () => {
  // get language and t function to change language
  const { t } = useLanguage();

  // get token from redux
  const token = useSelector(selectToken);

  // set state for table
  const [table, setTable] = useState<ICustomerTableState>({
    currentPage: 1,
    isLoading: true,
    pageSize: 10,
    total: 0,
    data: [],
  });

  useEffect(() => {
    getCustomer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCustomer = async () => {
    const certificateUseCase = new CustomerUseCase();
    const certificateViewModel = new CustomerViewModel(
      certificateUseCase,
      setTable
    );

    await certificateViewModel.getCustomer(token);
  };
  return (
    <div className="tw-m-0 tw-p-6 ">
      <div className="min-h-screen-with-header tw-bg-white tw-rounded tw-shadow">
        <HeaderContent
          title={t("user.title")}
          description={t("user.description")}
        >
          <div className="tw-w-full tw-flex tw-justify-end tw-items-center">
            <Button
              type="button"
              title="Add new data"
              icon={<PlusSquareIcon />}
              variant="fullColor"
              className="tw-gap-x-2 tw-bg-primary-500 !tw-w-[150px] active:tw-bg-primary-600 hover:tw-bg-primary-600 md:tw-text-base tw-text-white"
            />
          </div>
        </HeaderContent>
        <CustomerTable
          isLoading={table.isLoading}
          data={table.data}
          currentPage={table.currentPage}
          pageSize={table.pageSize}
          total={table.total}
          columns={CustomerColumn({
            onDetail(row) {
              logger(row);
            },
            onEdit(row) {
              logger(row);
            },
          })}
        />
      </div>
    </div>
  );
};

export default CustomerPage;
