import React from "react";
import { Form, Switch } from "antd";
import { Control, Controller, FieldError } from "react-hook-form";

interface FormToggleProps {
  name: string;
  label: string;
  control: Control<any>;
  rules?: Record<string, any>;
  checkedChildren?: string;
  unCheckedChildren?: string;
  error?: FieldError;
}

const FormToggle: React.FC<FormToggleProps> = ({
  name,
  label,
  control,
  rules,
  error,
}) => (
  <Form.Item
    label={label}
    validateStatus={error ? "error" : "success"}
    help={error ? error.message : null}
    className="tw-w-full tw-flex tw-items-center"
  >
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Switch
          {...field}
          checked={field.value}
          onChange={(checked) => field.onChange(checked)}
        />
      )}
    />
  </Form.Item>
);

export default FormToggle;
