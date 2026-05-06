import usersData from "../data/users.json";

export const loginUser = ({ username, password }) => {
  return (
    usersData.users.find(u => u.username === username && u.password === password) || null
  );
};