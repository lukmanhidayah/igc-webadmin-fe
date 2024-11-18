import HeaderContent from "@components/dashboard/layout/HeaderContent";
import TrashColumn from "@components/trash/TrashColumn";
import TrashTable from "@components/trash/TrashTable";
import { ITrashTableState } from "@domain/entities/TrashEntity";
import TrashUseCase from "@domain/useCases/TrashUseCase";
import { useLanguage } from "@lib/hooks/useLanguage";
import logger from "@lib/utils/logger";
import { selectToken } from "@redux/user/userReduxSelector";
import TrashViewModel from "@viewModels/TrashViewModel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TrashPage = () => {
  const { t } = useLanguage();
  const token = useSelector(selectToken);
  const [table, setTable] = useState<ITrashTableState>({
    currentPage: 1,
    isLoading: true,
    pageSize: 10,
    total: 0,
    data: [],
  });

  const trashViewModel = new TrashViewModel(new TrashUseCase(), token);

  useEffect(() => {
    getTrash();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTrash = async () => {
    await trashViewModel.getTrash(setTable);
  };

  return (
    <div className="tw-m-0 tw-p-6 ">
      <div className="min-h-screen-with-header tw-bg-white tw-rounded tw-shadow">
        <HeaderContent
          title={t("trash.title")}
          description={t("trash.description")}
        />
        <div className="tw-p-4">
          <TrashTable
            isLoading={table.isLoading}
            data={table.data}
            currentPage={table.currentPage}
            pageSize={table.pageSize}
            total={table.total}
            columns={TrashColumn({
              onDestroy(row) {
                logger(row);
              },
              onRestore(row) {
                logger(row);
              },
            })}
          />
          /
        </div>
      </div>
    </div>
  );
};

export default TrashPage;
