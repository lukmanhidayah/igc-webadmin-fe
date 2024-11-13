import { Card } from "antd";
import { useLanguage } from "@lib/hooks/useLanguage";
import MappingIcon from "@components/sidebar/MappingIcon";
import tailwindMerge from "@lib/utils/tailwindMerge";

const DashboardPage = () => {
  const { t } = useLanguage();

  const summaryData = [
    {
      title: "Sertifikat",
      value: "100",
      change: "+8% from yesterday",
      color: "tw-bg-[#FFE2E5]",
      icon: "cert",
      bgIcon: "tw-bg-red-400",
    },
    {
      title: "Memo",
      value: "300",
      change: "+5% from yesterday",
      color: "tw-bg-[#FFF4DE]",
      icon: "memo",
      bgIcon: "tw-bg-yellow-400",
    },
    {
      title: "Memo Non Origin",
      value: "8",
      change: "0.5% from yesterday",
      color: "tw-bg-[#F3E8FF]",
      icon: "memo",
      bgIcon: "tw-bg-purple-400",
    },
  ];

  return (
    <div className="tw-m-0 tw-p-6">
      <div className="tw-flex tw-flex-col tw-gap-4 tw-w-full">
        <div className="tw-flex tw-justify-between tw-w-full tw-gap-4">
          <div className="tw-w-full tw-bg-white tw-p-4 tw-rounded-md tw-shadow tw-overflow-hidden">
            <div className="tw-mb-4">
              <p className="tw-text-xl tw-font-semibold">
                {t("dashboard.title")}
              </p>
              <p>{t("dashboard.description")}</p>
            </div>

            {/* Summary Cards */}
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4 tw-mb-2">
              {summaryData.map((item, index) => (
                <Card key={index} className={`${item.color} tw-rounded-lg`}>
                  <div
                    className={tailwindMerge(
                      item.bgIcon,
                      "tw-w-[32px] tw-h-[32px] tw-flex tw-items-center tw-justify-center tw-rounded-full"
                    )}
                  >
                    <MappingIcon
                      className="tw-h-[18px] tw-text-white"
                      iconType={item.icon}
                    />
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-4">
                    <div>
                      <p className="tw-font-semibold tw-text-xl">
                        {item.value}
                      </p>
                      <p>{item.title}</p>
                      <p className="tw-text-xs tw-text-primary-500">
                        {item.change}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
