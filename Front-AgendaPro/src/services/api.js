import axios from "axios";

const api = axios.create({
  baseURL: "https://web-desarrollosoftware-api-cthkhefma6csekea.eastus2-01.azurewebsites.net/api"
});

export default api;