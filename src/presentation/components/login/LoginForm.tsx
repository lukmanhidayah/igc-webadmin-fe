import React from "react";
import { useForm } from "react-hook-form";
import LoginFormProps from "./LoginForm.interface";
import InputField from "@components/form/input/InputField";
import Button from "@components/form/button/Button";
import { useLanguageViewModel } from "@viewModels/useLanguageViewModel";
import { ILoginRequest } from "@domain/entities/LoginEntity";

const LoginForm: React.FC<LoginFormProps<ILoginRequest>> = ({
  onSubmit,
  loading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>();

  const { t } = useLanguageViewModel();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tw-w-full">
      <InputField
        label="Email"
        id="email"
        type="text"
        placeholder={t("login.form.email.placeholder")}
        register={register("email", {
          required: t("login.form.email.not_null"),
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: t("login.form.email.invalid"),
          },
        })}
        error={errors.email}
      />
      <InputField
        label="Password"
        id="password"
        type="password"
        placeholder="********"
        register={register("password", {
          required: t("login.form.password.not_null"),
        })}
        error={errors.password}
      />
      <Button
        type="submit"
        title={t("login.form.login_button")}
        variant="fullColor"
        rounded="small"
        loading={loading}
        className="tw-bg-primary-500 active:tw-bg-primary-600 hover:tw-bg-primary-600 md:tw-text-base tw-text-white"
      />
    </form>
  );
};

export default LoginForm;
