import { Button, Form, Input, Select } from "antd";
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
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      className="tw-space-y-4"
    >
      <Form.Item
        label="Customer"
        validateStatus={errors.member_phone_number ? "error" : ""}
        help={errors.member_phone_number?.message}
      >
        <Select
          className="tw-w-full tw-h-10"
          showSearch
          onChange={(value) => setValue("member_phone_number", value)}
          options={customers}
        />
      </Form.Item>

      <Form.Item
        label="Object Name"
        validateStatus={errors.attributes?.object_name ? "error" : ""}
        help={errors.attributes?.object_name?.message}
      >
        <Input
          className="tw-py-2"
          {...register("attributes.object_name", {
            required: "Object Name is required",
          })}
        />
      </Form.Item>

      <Form.Item
        label="Measurement"
        validateStatus={errors.attributes?.measurement ? "error" : ""}
        help={errors.attributes?.measurement?.message}
      >
        <Input
          className="tw-py-2"
          {...register("attributes.measurement", {
            required: "Measurement is required",
          })}
        />
      </Form.Item>

      <Form.Item
        label="Clarity"
        validateStatus={errors.attributes?.clarity ? "error" : ""}
        help={errors.attributes?.clarity?.message}
      >
        <Input
          className="tw-py-2"
          {...register("attributes.clarity", {
            required: "Clarity is required",
          })}
        />
      </Form.Item>

      <Form.Item
        label="Transparency"
        validateStatus={errors.attributes?.transparency ? "error" : ""}
        help={errors.attributes?.transparency?.message}
      >
        <Input
          className="tw-py-2"
          {...register("attributes.transparency", {
            required: "Transparency is required",
          })}
        />
      </Form.Item>

      <Form.Item
        label="Cut"
        validateStatus={errors.attributes?.cut ? "error" : ""}
        help={errors.attributes?.cut?.message}
      >
        <Input
          className="tw-py-2"
          {...register("attributes.cut", { required: "Cut is required" })}
        />
      </Form.Item>

      <div className="tw-flex tw-justify-end tw-gap-2">
        <Button
          key="reset"
          type="primary"
          danger
          onClick={onReset}
          className="tw-h-[40px] tw-font-semibold"
        >
          Reset
        </Button>
        <Button
          key="submit"
          type="primary"
          className="tw-h-[40px] tw-font-semibold"
          htmlType="submit"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default CertificateForm;
