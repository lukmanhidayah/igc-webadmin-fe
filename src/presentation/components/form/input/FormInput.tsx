import React from "react";
import { Form, Input } from "antd";
import { Control, Controller, FieldError } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  control: Control<any>;
  rules?: Record<string, any>;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  control,
  rules,
  error,
}) => (
  <Form.Item
    label={label}
    validateStatus={error ? "error" : "success"}
    help={error ? error.message : null}
    className="tw-w-full"
  >
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Input
          className="tw-py-2 focus-within:tw-ring-secondary-600 focus-within:tw-ring-2 focus-within:tw-border-transparent"
          {...field}
          placeholder={placeholder}
          type={type}
        />
      )}
    />
  </Form.Item>
);

export default FormInput;
