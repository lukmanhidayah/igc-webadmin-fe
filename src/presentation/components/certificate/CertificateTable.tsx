
import DataTable from "@components/table/DataTable";
import { ICertificateData } from "@domain/entities/CertificateEntity";
import { IDataTable } from "@domain/entities/DashboardEntity";

const CertificateTable: React.FC<IDataTable<ICertificateData>> = (props) => (
  <DataTable {...props} />
);

export default CertificateTable;
