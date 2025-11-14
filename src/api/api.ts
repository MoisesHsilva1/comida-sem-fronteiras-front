import Environment from "@/config/env";
import axios, { type AxiosInstance } from "axios";

function getAPIClient(): AxiosInstance {
  const api = axios.create({
    baseURL: Environment.VITE_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
}

export const api = getAPIClient();
