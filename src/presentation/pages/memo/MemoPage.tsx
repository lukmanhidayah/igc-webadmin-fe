import HeaderContent from "@components/dashboard/layout/HeaderContent";
import Button from "@components/form/button/Button";
import PlusSquareIcon from "@components/icon/PlusSquareIcon";
import MemoColumn from "@components/memo/MemoColumn";
import MemoTable from "@components/memo/MemoTable";
import { IMemoTableState } from "@domain/entities/MemoEntity";
import MemoUseCase from "@domain/useCases/MemoUseCase";
import { useLanguage } from "@lib/hooks/useLanguage";
import logger from "@lib/utils/logger";
import { selectToken } from "@redux/user/userReduxSelector";
import MemoViewModel from "@viewModels/MemoViewModel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MemoPage = () => {
  // get language and t function to change language
  const { t } = useLanguage();

  // get token from redux
  const token = useSelector(selectToken);

  // set state for table
  const [table, setTable] = useState<IMemoTableState>({
    currentPage: 1,
    isLoading: true,
    pageSize: 10,
    total: 0,
    data: [],
  });

  useEffect(() => {
    getMemo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMemo = async () => {
    const certificateUseCase = new MemoUseCase();
    const certificateViewModel = new MemoViewModel(
      certificateUseCase,
      setTable
    );
    await certificateViewModel.getMemo(token);
  };
  return (
    <div className="tw-m-0 tw-p-6 ">
      <div className="min-h-screen-with-header tw-bg-white tw-rounded tw-shadow">
        <HeaderContent
          title={t("memo.title")}
          description={t("memo.description")}
        >
          <div className="tw-w-full tw-flex tw-justify-end tw-items-center">
            <Button
              type="button"
              title="Add new data"
              icon={<PlusSquareIcon />}
              variant="fullColor"
              className="tw-gap-x-2 tw-bg-primary-500 !tw-w-[250px] active:tw-bg-primary-600 hover:tw-bg-primary-600 md:tw-text-base tw-text-white"
            />
          </div>
        </HeaderContent>
        <MemoTable
          isLoading={table.isLoading}
          data={table.data}
          currentPage={table.currentPage}
          pageSize={table.pageSize}
          total={table.total}
          columns={MemoColumn({
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

export default MemoPage;
