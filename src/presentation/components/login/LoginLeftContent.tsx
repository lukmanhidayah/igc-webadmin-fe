import loginBg from "@assets/svg/login.svg";

const LoginLoginContent = () => {
  return (
    <div
      className="tw-w-4/6 tw-hidden lg:tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-primary-500 tw-text-white"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default LoginLoginContent;
