// React
import { useEffect, useState, createContext } from "react";

// Datas
import users from "../data/users.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    const found = users.find(
      (user) => user.username === username && user.password === password
    );

    if (found) {
      const userData = { username: found.username, name: found.name };
      setUser(userData);
      localStorage.setItem("auth_user", JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false, message: "Credenciais inválidas." };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
