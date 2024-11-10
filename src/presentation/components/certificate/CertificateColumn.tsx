import Button from "@components/form/button/Button";
import { ICertificateData } from "@domain/entities/CertificateEntity";
import { IColumn } from "@domain/entities/DashboardEntity";
import { ColumnsType } from "antd/es/table";

const CertificateColumn = (
  props: IColumn<ICertificateData>
): ColumnsType<ICertificateData> => [
  {
    title: "No",
    dataIndex: "index",
    key: "index",
    width: 100,
    render: (_, _1, index) => index + 1, // Sequential number
  },
  {
    title: "Kode",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nama",
    dataIndex: "attributes.object_name",
    key: "attributes.object_name",
    render: (_, record) => record.attributes.object_name,
  },
  {
    title: "Pelanggan",
    dataIndex: "member_phone_number",
    key: "member_phone_number",
  },
  {
    title: "Pembuat",
    dataIndex: "created_by",
    key: "created_by",
  },

  {
    title: "Action",
    key: "action",
    align: "center",
    width: 250,
    render: (_, record) => {
      return (
        <div className="tw-flex tw-flex-wrap tw-gap-4 tw-w-full tw-justify-center">
          <Button
            type="button"
            title={"Edit"}
            onClick={() => props.onEdit(record)}
            className="tw-gap-x-2 tw-text-white tw-text-sm !tw-w-[70px] tw-bg-green-500 tw-px-3 tw-py-1 active:tw-bg-green-500 hover:tw-bg-green-500 hover:tw-bg-opacity-80 active:tw-bg-opacity-80 tw-flex-1"
            rounded="middle"
          />

          <Button
            type="button"
            title={"Detail"}
            onClick={() => props.onDetail(record)}
            className="tw-gap-x-2 tw-text-white tw-text-sm !tw-w-[70px] tw-bg-primary-600 tw-px-3 tw-py-1 active:tw-bg-primary-600 hover:tw-bg-primary-600 hover:tw-bg-opacity-80 active:tw-bg-opacity-80 tw-flex-1"
            rounded="middle"
          />
        </div>
      );
    },
  },
];

export default CertificateColumn;
