import axios from "axios";
import { getAccessToken } from "../utils/getToken";

const apiRequest = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
});

export default apiRequest;