import React, { useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { Upload, Button, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface FormUploadProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  control: Control<any>;
  rules?: Record<string, any>;
  error?: FieldError;
}

const FormUpload: React.FC<FormUploadProps> = ({
  name,
  label,
  control,
  rules,
  error,
}) => {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  // // get value
  // const getValue = control._formValues[name];

  const handlePreview = (file: any) => {
    console.log(file)
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <Form.Item
      label={label}
      validateStatus={error ? "error" : "success"}
      help={error?.message}
    >
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className="tw-w-full tw-flex tw-justify-start tw-items-start tw-gap-4">
            <Upload
              accept=".jpg,.png"
              showUploadList={false}
              beforeUpload={(file) => {
                field.onChange(file);
                handlePreview(file);
                return false;
              }}
              maxCount={1}
            >
              <Button
                className="tw-border tw-w-[110px] tw-border-primary-500 tw-text-primary-500 tw-font-semibold tw-px-4 tw-py-5 tw-mb-2 tw-rounded-md"
                icon={<UploadOutlined className="tw-text-primary-500" />}
              >
                Upload
              </Button>
              {previewImage && (
                <img
                  alt="Preview"
                  className="tw-w-[180px] tw-h-[180px] tw-object-contain tw-rounded-md"
                  src={previewImage}
                />
              )}
            </Upload>
          </div>
        )}
      />
    </Form.Item>
  );
};

export default FormUpload;
