import DataTable from "@components/table/DataTable";
import { ICustomerData } from "@domain/entities/CustomerEntity";
import { IDataTable } from "@domain/entities/DashboardEntity";

const CustomerTable: React.FC<IDataTable<ICustomerData>> = (props) => (
  <DataTable {...props} />
);

export default CustomerTable;
