import axios from "axios";

const API_URL = "https://693bf570b762a4f15c3eec43.mockapi.io/users";

export const getUsers = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createUser = async (user: { name: string; email: string }) => {
  const { data } = await axios.post(API_URL, user);
  return data;
};
