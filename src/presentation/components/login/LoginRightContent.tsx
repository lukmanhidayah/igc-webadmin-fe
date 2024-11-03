import { IAuthForm } from "@domain/entities/UserEntity";
import LoginForm from "./LoginForm";
import LoginFormProps from "./LoginForm.interface";
import logo from "@assets/svg/logo.svg";
import { Select } from "antd";
import { useLanguageViewModel } from "@viewModels/useLanguageViewModel";
import languages from "@lib/utils/languages";

const LoginRightContent: React.FC<LoginFormProps<IAuthForm>> = ({
  loading,
  onSubmit,
}) => {
  const { t, language, handleChangeLanguage } = useLanguageViewModel();

  return (
    <div className="tw-w-full lg:tw-w-2/6 tw-bg-white tw-relative tw-h-screen tw-flex tw-flex-col">
      <div className="tw-w-full tw-flex tw-justify-end tw-p-4 tw-border-b tw-flex-2">
        <Select
          suffixIcon
          value={language}
          className="tw-w-[200px]"
          options={languages}
          onChange={handleChangeLanguage}
        />
      </div>
      <div className="tw-flex tw-w-full lg:tw-w-full tw-flex-col tw-justify-center tw-items-center tw-p-[10px] tw-h-full">
        <div className="tw-w-5/6 lg:tw-w-5/6">
          <div className="tw-mb-10 tw-flex tw-flex-col tw-justify-center tw-items-start tw-w-full">
            <img src={logo} alt="Logo" className="tw-w-20 tw-h-20 tw-mb-4" />
            <h1 className="tw-text-2xl tw-font-semibold tw-text-left">
              {t("login.form.title")}
            </h1>
            <p>{t('login.form.description')}</p>
          </div>
          <LoginForm onSubmit={onSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default LoginRightContent;
