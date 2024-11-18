import { IColumn } from "@domain/entities/DashboardEntity";
import { IMemoData } from "@domain/entities/MemoEntity";
import { Button } from "antd";
import { ColumnsType } from "antd/es/table";

const MemoColumn = (props: IColumn<IMemoData>): ColumnsType<IMemoData> => [
  {
    title: "No",
    dataIndex: "index",
    key: "index",
    width: 80,
    responsive: ["xs", "sm", "md", "lg"],
    render: (_, _1, index) => index + 1, // Sequential number
  },
  {
    title: "Kode",
    dataIndex: "id",
    key: "id",
    responsive: ["xs", "sm", "md", "lg"],
  },
  {
    title: "Nama",
    dataIndex: "attributes.object_name",
    key: "attributes.object_name",
    responsive: ["xs", "sm", "md", "lg"],
    render: (_, record) => record.attributes.object_name,
  },
  {
    title: "Pelanggan",
    dataIndex: "member_phone_number",
    key: "member_phone_number",
    responsive: ["lg"], // Show only on medium and larger screens
  },
  {
    title: "Pembuat",
    dataIndex: "created_by",
    key: "created_by",
    responsive: ["lg"], // Show only on medium and larger screens
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
            onClick={() => props.onEdit && props.onEdit(record)}
            type="primary"
            className="!tw-h-[40px] tw-rounded-md tw-shadow !tw-w-[80px] tw-font-semibold  !tw-bg-green-500 !tw-border-green-500 hover:!tw-bg-green-600"
          >
            Edit
          </Button>
          <Button
            type="primary"
            onClick={() => props.onDetail && props.onDetail(record)}
            className="!tw-h-[40px] !tw-w-[80px] tw-rounded-md tw-shadow tw-font-semibold "
          >
            Detail
          </Button>
        </div>
      );
    },
  },
];

export default MemoColumn;
