import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";
export const fetchUsers = async () => {
  return await axios.get(API_URL);
};