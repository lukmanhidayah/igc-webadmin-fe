import DataTable from "@components/table/DataTable";
import { ITrashData } from "@domain/entities/TrashEntity";
import { IDataTable } from "@domain/entities/DashboardEntity";

const TrashTable: React.FC<IDataTable<ITrashData>> = (props) => (
  <DataTable {...props} />
);

export default TrashTable;
