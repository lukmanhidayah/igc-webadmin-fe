import { Button, Form } from "antd";
import { ICertificateFormProps } from "@domain/entities/CertificateEntity";
import FormInput from "@components/form/input/FormInput";
import FormSelect from "@components/form/input/FormSelect";
import FormToggle from "@components/form/input/FormToggle";
import FormUpload from "@components/form/input/FormUpload";

const CertificateForm: React.FC<ICertificateFormProps> = ({
  onSubmit,
  onReset,
  errors,
  isFormLoading,
  control,
  suggestions,
  customers,
}) => {
  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      className="tw-h-[calc(95vh-32px)] tw-pb-[20px] tw-overflow-hidden tw-flex tw-flex-col tw-justify-between"
    >
      <div className="tw-h-full tw-overflow-auto tw-px-4 tw-flex-1">
        {/* create image */}
        <FormUpload
          name="attributes.object_image"
          label="Object Image"
          placeholder="Object Image"
          control={control}
          rules={{ required: "Object Image is required" }}
          error={errors.attributes?.object_image}
        />
        <FormSelect
          name="member_phone_number"
          label="Customer"
          placeholder="Select your customer"
          options={customers.data}
          control={control}
          loading={customers.isLoading}
          rules={{ required: "Customer is required" }}
          error={errors.member_phone_number}
        />

        <FormSelect
          name="attributes.object_name"
          label="Object Name"
          placeholder="Select your object name"
          options={suggestions.data.object_name}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Object name is required" }}
          error={errors.attributes?.object_name}
        />

        <FormInput
          name="attributes.measurement"
          label="Measurement"
          placeholder="10 x 20 x 30cm"
          control={control}
          rules={{ required: "Measurement is required" }}
          error={errors.attributes?.measurement}
        />

        <FormSelect
          name="attributes.clarity"
          label="Clarity"
          placeholder="Select your clarity"
          options={suggestions.data.clarity}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Clarity is required" }}
          error={errors.attributes?.clarity}
        />
        <FormSelect
          name="attributes.transparency"
          label="Transparency"
          placeholder="Select your transparency"
          options={suggestions.data.transparency}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Transparency is required" }}
          error={errors.attributes?.transparency}
        />
        <FormSelect
          name="attributes.cut"
          label="Cut"
          placeholder="Select your cut"
          options={suggestions.data.cut}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Cut is required" }}
          error={errors.attributes?.cut}
        />
        <FormSelect
          name="attributes.shape"
          label="Shape"
          placeholder="Select your shape"
          options={suggestions.data.shape}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Shape is required" }}
          error={errors.attributes?.shape}
        />
        <FormSelect
          name="attributes.color"
          label="Color"
          placeholder="Select your color"
          options={suggestions.data.color}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Color is required" }}
          error={errors.attributes?.color}
        />

        <FormInput
          name="attributes.weight"
          label="Weight"
          placeholder="10 carat"
          control={control}
          rules={{ required: "Weight is required" }}
          error={errors.attributes?.weight}
        />

        <FormSelect
          name="attributes.origins"
          label="Origin"
          placeholder="Select your origins"
          options={suggestions.data.origin}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Origins is required" }}
          error={errors.attributes?.origins}
        />

        <FormSelect
          name="attributes.comments"
          label="Comment"
          placeholder="Select your comments"
          options={suggestions.data.comment}
          loading={suggestions.isLoading}
          control={control}
          rules={{ required: "Comment is required" }}
          error={errors.attributes?.comments}
        />

        <FormInput
          name="additional_comment"
          label="Additional Comment"
          placeholder="Additional Comment"
          control={control}
          rules={{ required: "Additional Comment is required" }}
          error={errors.additional_comment}
        />

        <FormToggle
          name="status"
          label="Status"
          control={control}
          error={errors.status}
        />
      </div>

      <div className="tw-flex tw-px-4 tw-border-t tw-py-2 tw-justify-end tw-gap-2">
        <Button
          key="reset"
          type="primary"
          loading={isFormLoading}
          danger
          onClick={onReset}
          className="tw-h-[40px] tw-font-semibold"
        >
          Reset
        </Button>
        <Button
          key="submit"
          loading={isFormLoading}
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
