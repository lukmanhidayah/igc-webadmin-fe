import CertificateColumn from "@components/certificate/CertificateColumn";
import CertificateTable from "@components/certificate/CertificateTable";
import HeaderContent from "@components/dashboard/layout/HeaderContent";
import { Modal, Button } from "antd";
import PlusSquareIcon from "@components/icon/PlusSquareIcon";
import {
  ICertificateData,
  ICertificateTableState,
} from "@domain/entities/CertificateEntity";
import CertificateUseCase from "@domain/useCases/CertificateUseCase";
import { useLanguage } from "@lib/hooks/useLanguage";
import logger from "@lib/utils/logger";
import { selectToken } from "@redux/user/userReduxSelector";
import CertificateViewModel from "@viewModels/CertificateViewModel";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CertificateForm from "@components/certificate/CertificateForm";

const CertificatePage = () => {
  // get language and t function to change language
  const { t } = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ICertificateData>({});

  const token = useSelector(selectToken);

  const [table, setTable] = useState<ICertificateTableState>({
    currentPage: 1,
    isLoading: true,
    pageSize: 10,
    total: 0,
    data: [],
  });

  const certificateViewModel = new CertificateViewModel(
    new CertificateUseCase(),
    setTable,
    setIsModalOpen,
    reset
  );

  useEffect(() => {
    getCertificate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCertificate = async () => {
    await certificateViewModel.getCertificate(token);
  };

  return (
    <div className="tw-m-0 tw-p-6 ">
      <Modal
        title="Tambah Sertifikat"
        open={isModalOpen}
        centered
        footer={null}
        destroyOnClose
        maskClosable={false}
        className="modal-with-underline"
        onCancel={certificateViewModel.handleModalClose}
      >
        <CertificateForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={certificateViewModel.handleFormSubmit}
          onReset={reset}
          setValue={setValue}
          errors={errors}
        />
      </Modal>
      <div className="min-h-screen-with-header tw-bg-white tw-rounded tw-shadow">
        <HeaderContent
          title={t("certificate.title")}
          description={t("certificate.description")}
        >
          <div className="tw-w-full tw-flex tw-justify-end tw-items-center">
            <Button
              onClick={certificateViewModel.handleModalOpen}
              type="primary"
              icon={<PlusSquareIcon />}
              className="!tw-h-[45px] tw-rounded-md tw-shadow tw-font-semibold tw-text-white"
            >
              Add new data
            </Button>
          </div>
        </HeaderContent>
        <CertificateTable
          isLoading={table.isLoading}
          data={table.data}
          currentPage={table.currentPage}
          pageSize={table.pageSize}
          total={table.total}
          columns={CertificateColumn({
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

export default CertificatePage;
