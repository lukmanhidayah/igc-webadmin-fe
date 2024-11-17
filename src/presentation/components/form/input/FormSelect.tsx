import React from "react";
import { Form, Select } from "antd";
import { Control, Controller, FieldError } from "react-hook-form";

const { Option } = Select;

import "./FormSelect.style.css";

interface FormSelectProps {
  name: string;
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  control: Control<any>;
  rules?: Record<string, any>;
  error?: FieldError;
  loading?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  placeholder,
  options,
  control,
  rules,
  error,
  loading,
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
          variant="outlined"
          className="custom-select"
          showSearch
          loading={loading}
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
