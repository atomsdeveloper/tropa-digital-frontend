import { useState } from "react";

// Hooks
import { useUser } from "../../hooks/useUser";

export const Login = () => {
  const { login, user, logout } = useUser();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    const res = login(form.username, form.password);
    if (!res.success) {
      setError(res.message);
    } else {
      setError("");
    }
  };

  if (user) {
    return (
      <div>
        <p>Bem-vindo, {user.name}!</p>
        <button onClick={logout}>Sair</button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Usuário"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
