import { Card, Typography } from "antd";
import { Line, Bar } from "react-chartjs-2";
import { useLanguage } from "@lib/hooks/useLanguage";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import MappingIcon from "@components/sidebar/MappingIcon";
import tailwindMerge from "@lib/utils/tailwindMerge";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const { Title } = Typography;

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
      title: "New Customers",
      value: "8",
      change: "0.5% from yesterday",
      color: "tw-bg-[#F3E8FF]",
      icon: "user",
      bgIcon: "tw-bg-purple-400",
    },
  ];

  const visitorData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Loyal Customers",
        data: [500, 200, 300, 400, 300, 200, 100, 200, 300, 400, 300, 200],
        borderColor: "#004B86",
        backgroundColor: "rgba(31, 41, 55, 0.1)",
        tension: 0.4, // Adjust this value to increase roundness
        pointRadius: 5, // Make points more visible (optional)
        pointHoverRadius: 7, // Make points larger on hover (optional)
      },
      {
        label: "New Customers",
        data: [200, 250, 350, 450, 350, 250, 150, 250, 350, 450, 350, 250],
        borderColor: "#79BBFF",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4, // Adjust this value to increase roundness
        pointRadius: 5, // Make points more visible (optional)
        pointHoverRadius: 7, // Make points larger on hover (optional)
      },
    ],
  };

  const revenueData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Sertifikat",
        data: [12000, 15000, 20000, 8000, 10000, 14000, 22000],
        backgroundColor: "#004B86",
      },
      {
        label: "Memo",
        data: [10000, 11000, 15000, 7000, 9000, 13000, 18000],
        backgroundColor: "#79BBFF",
      },
    ],
  };

  return (
    <div className="tw-m-0 tw-p-6 ">
      <div className="tw-flex tw-flex-col tw-gap-4 tw-w-full">
        <div className="tw-flex tw-justify-between tw-w-full tw-gap-4">
          <div className="tw-w-7/12 tw-bg-white tw-p-4 tw-rounded-md tw-shadow tw-overflow-hidden">
            <div className="tw-mb-4">
              <p className="tw-text-xl tw-font-semibold">{t("dashboard.title")}</p>
              <p>{t("dashboard.description")}</p>
            </div>

            {/* Summary Cards */}
            <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-mb-2">
              {summaryData.map((item, index) => (
                <Card
                  key={index}
                  className={`${item.color} tw-rounded-lg`}
                >
                  <div
                    className={tailwindMerge(
                      item.bgIcon,
                      "tw-w-[32px] tw-h-[32px] tw-flex tw-items-center tw-justify-center tw-rounded-full"
                    )}
                  >
                    <MappingIcon className="tw-h-[18px] tw-text-white" iconType={item.icon} />
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
          <div className="tw-w-5/12 tw-bg-white tw-p-4 tw-rounded-md tw-shadow tw-overflow-hidden">
            <Title level={4}>Visitor Insights</Title>
            <Line data={visitorData} />
          </div>
        </div>
        <div className="tw-w-full tw-bg-white tw-p-4 tw-rounded-md tw-shadow tw-overflow-hidden">
          <Title level={4}>Total Pendapatan</Title>
          <Bar data={revenueData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
