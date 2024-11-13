import { Button, Form } from "antd";
import { ICertificateFormProps } from "@domain/entities/CertificateEntity";
import FormInput from "@components/form/input/FormInput";
import FormSelect from "@components/form/input/FormSelect";

const customers = [
  { value: "Asep", label: "Asep" },
  { value: "Budi", label: "Budi" },
  { value: "Citra", label: "Citra" },
];

const CertificateForm: React.FC<ICertificateFormProps> = ({
  onSubmit,
  onReset,
  errors,
  control,
  handleSubmit,
}) => {
  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      className="tw-space-y-4"
    >
      <FormSelect
        name="member_phone_number"
        label="Customer"
        placeholder="Select your role"
        options={customers}
        control={control}
        rules={{ required: "Customer is required" }}
        error={errors.member_phone_number}
      />

      <FormInput
        name="attributes.measurement"
        label="Measurement"
        placeholder="Enter measurement"
        control={control}
        rules={{ required: "Measurement is required" }}
        error={errors.attributes?.measurement}
      />

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
