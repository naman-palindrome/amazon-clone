import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/deployed-d640d/us-central1/api",
});

export default instance;
