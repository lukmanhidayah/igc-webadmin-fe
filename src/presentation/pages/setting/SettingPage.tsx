import HeaderContent from "@components/dashboard/layout/HeaderContent";
import Button from "@components/form/button/Button";
import PlusSquareIcon from "@components/icon/PlusSquareIcon";
import { useLanguageViewModel } from "@viewModels/useLanguageViewModel";

const SettingPage = () => {
  const { t } = useLanguageViewModel();

  return (
    <div className="tw-m-0 tw-p-6 ">
      <div className="min-h-screen-with-header tw-bg-white tw-rounded tw-shadow">
        <HeaderContent
          title={t("setting.title")}
          description={t("setting.description")}
        >
          <div className="tw-w-full tw-flex tw-justify-end tw-items-center">
            <Button
              type="button"
              title="Add new data"
              icon={<PlusSquareIcon />}
              variant="fullColor"
              className="tw-gap-x-2 tw-bg-primary-500 !tw-w-[250px] active:tw-bg-primary-600 hover:tw-bg-primary-600 md:tw-text-base tw-text-white"
            />
          </div>
        </HeaderContent>
      </div>
    </div>
  );
};

export default SettingPage;
