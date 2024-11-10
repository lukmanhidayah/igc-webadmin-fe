import EmptyIcon from "@components/icon/EmptyIcon";

interface IEmptyTable {
  title?: string;
  desc?: string;
  className?: string;
}

const EmptyTable = ({
  title = "Data belum tersedia",
  desc = "Belum ada data yang tersedia, silahkan isi data sesuai ketentuan.",
  className,
}: IEmptyTable) => {
  return (
    <div
      className={`tw-flex tw-p-24 tw-h-full tw-flex-col tw-justify-center tw-items-center tw-text-center ${className}`}
    >
      <EmptyIcon width={80} height={80} />
      <strong className="tw-text-lg tw-text-primary-500">{title}</strong>
      <p className="tw-text-black">{desc}</p>
    </div>
  );
};

export default EmptyTable;
