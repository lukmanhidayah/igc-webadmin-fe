import React from "react";
import Lottie from "react-lottie";
import * as animationData from "@lottie-asset/driver.json"; // Path ke file JSON animasi Lottie

const LottieDriver: React.FC = () => {
  const ref = React.useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    disablePointerEvents: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie ref={ref} options={defaultOptions} isClickToPauseDisabled />
    </div>
  );
};

export default LottieDriver;
