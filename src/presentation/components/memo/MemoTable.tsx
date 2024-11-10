import DataTable from "@components/table/DataTable";
import { IDataTable } from "@domain/entities/DashboardEntity";
import { IMemoData } from "@domain/entities/MemoEntity";

const MemoTable: React.FC<IDataTable<IMemoData>> = (props) => (
  <DataTable {...props} />
);

export default MemoTable;
