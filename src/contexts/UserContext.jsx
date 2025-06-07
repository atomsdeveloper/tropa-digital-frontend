// React
import { useState } from "react";

// Datas
import users from "../data/users.json";

// Context
import UserContext from "./CreateContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return { email: "", name: "", role: "" };
  });

  const login = (email, password) => {
    console.log(email, password);

    const found = users.find(
      (user) => user.email === email && user.password === password
    );

    if (found) {
      const userData = {
        email: found.email,
        name: found.name,
        role: found.role,
      };
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
