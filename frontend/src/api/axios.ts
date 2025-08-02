import axios from "axios";

export const api = axios.create({
  baseURL: "http://ocr-caseoutline-backend-production.up.railway.app",
  withCredentials: true,
});
