// React
import { useState } from "react";

// Styled Components
import {
  Container,
  BoxLogin,
  BoxForm,
  Form,
  BoxImage,
  BoxBgImage,
  Title,
  Text,
  BoxInput,
} from "./styled";

// Hooks
import { useUser } from "../../hooks/useUser";

export const Login = () => {
  // Context
  const { login, user, logout } = useUser();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    const res = login(form.email, form.password);
    if (!res.success) {
      setError(res.message);
      console.log(error);
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
    <Container>
      <BoxLogin>
        <BoxForm>
          <img
            src="login-logo.png"
            alt="Imagem de logo da página."
            width={161}
            height={25}
          />
          <Title>Bem-Vindo de volta</Title>
          <Text>Entre com sua conta para acessar o painel.</Text>
          <Form>
            <BoxInput>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            </BoxInput>
            <button onClick={handleLogin}>Entrar</button>
          </Form>
        </BoxForm>

        <BoxImage>
          <BoxBgImage>
            <img src="login-image.png" alt="" />
          </BoxBgImage>
        </BoxImage>
      </BoxLogin>
    </Container>
  );
};
