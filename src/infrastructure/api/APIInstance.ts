import axios from "axios";
import config from "../../../config/app.config";

const baseURL = config.baseURL[import.meta.env.VITE_BUILD_MODE];

export const APIPhoenix = axios.create({
  baseURL: baseURL.HOST_PHOENIX,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});