import axios from "axios";

const API = axios.create({
  baseURL: "https://globalbrief.onrender.com",
});

export default API;