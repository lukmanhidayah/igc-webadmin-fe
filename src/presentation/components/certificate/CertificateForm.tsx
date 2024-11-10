import { Button, Input, Select } from "antd";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ICertificateData } from "@domain/entities/CertificateEntity";

const customers = [
  { value: "Asep", label: "Asep" },
  { value: "Budi", label: "Budi" },
  { value: "Citra", label: "Citra" },
];

interface CertificateFormProps {
  onSubmit: (data: ICertificateData) => void;
  onReset: () => void;
  setValue: UseFormSetValue<ICertificateData>;
  errors: any;
  register: UseFormRegister<ICertificateData>;
  handleSubmit: UseFormHandleSubmit<ICertificateData, undefined>;
}

const CertificateForm: React.FC<CertificateFormProps> = ({
  onSubmit,
  onReset,
  setValue,
  errors,
  register,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-4">
      <div>
        <label className="tw-block tw-mb-1">Customer</label>
        <Select
          className="tw-w-full tw-h-10"
          showSearch
          defaultValue=""
          onChange={(value) => setValue("member_phone_number", value)}
          options={customers}
        />
      </div>

      <div>
        <label className="tw-block tw-mb-1">Object Name</label>
        <Input
          className="tw-py-2"
          {...register("attributes.object_name", {
            required: "Object Name is required",
          })}
        />
        {errors.attributes?.object_name && (
          <p className="tw-text-red-500">
            {errors.attributes?.object_name.message}
          </p>
        )}
      </div>
      <div>
        <label className="tw-block tw-mb-1">Measurement</label>
        <Input
          className="tw-py-2"
          {...register("attributes.measurement", {
            required: "Measurement is required",
          })}
        />
        {errors.attributes?.measurement && (
          <p className="tw-text-red-500">
            {errors.attributes?.measurement.message}
          </p>
        )}
      </div>
      <div>
        <label className="tw-block tw-mb-1">Clarity</label>
        <Input
          className="tw-py-2"
          {...register("attributes.clarity", {
            required: "Clarity is required",
          })}
        />
        {errors.attributes?.clarity && (
          <p className="tw-text-red-500">
            {errors.attributes?.clarity.message}
          </p>
        )}
      </div>
      <div>
        <label className="tw-block tw-mb-1">Transparency</label>
        <Input
          className="tw-py-2"
          {...register("attributes.transparency", {
            required: "Transparency is required",
          })}
        />
        {errors.attributes?.transparency && (
          <p className="tw-text-red-500">
            {errors.attributes?.transparency.message}
          </p>
        )}
      </div>
      <div>
        <label className="tw-block tw-mb-1">Cut</label>
        <Input
          className="tw-py-2"
          {...register("attributes.cut", { required: "Cut is required" })}
        />
        {errors.attributes?.cut && (
          <p className="tw-text-red-500">{errors.attributes?.cut.message}</p>
        )}
      </div>
      <div className="tw-flex tw-justify-end tw-space-x-2">
        <Button
          key="reset"
          onClick={onReset}
          className="tw-bg-red-500 tw-text-white tw-border-none"
        >
          Reset
        </Button>
        <Button
          key="submit"
          type="primary"
          className="tw-bg-blue-500 tw-text-white"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CertificateForm;
