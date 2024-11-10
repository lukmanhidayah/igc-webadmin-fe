const logger = (...message: any) => {
  if (import.meta.env.VITE_BUILD_MODE !== "prod") {
    console.log(...message);
  }
};

export default logger;
