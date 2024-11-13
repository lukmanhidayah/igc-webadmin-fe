import React from "react";
import { Form, Select } from "antd";
import { Control, Controller, FieldError } from "react-hook-form";

const { Option } = Select;

interface FormSelectProps {
  name: string;
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  control: Control<any>;
  rules?: Record<string, any>;
  error?: FieldError;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  placeholder,
  options,
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
        <Select
          className="tw-py-2 focus-within:tw-ring-secondary-600 focus-within:tw-ring-2 focus-within:tw-border-transparent"
          {...field}
          placeholder={placeholder}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      )}
    />
  </Form.Item>
);

export default FormSelect;
