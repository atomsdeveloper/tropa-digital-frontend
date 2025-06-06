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
  InputLabel,
  Input,
  Button,
  BoxFormContent,
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
          <BoxFormContent>
            <img
              src="login-logo.png"
              alt="Imagem de logo da página."
              width={161}
              height={25}
            />
            <Title>
              Bem-Vindo de volta{" "}
              <span>Entre com sua conta para acessar o painel</span>
            </Title>
            <Form>
              <BoxInput>
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="seunome@seuservidor.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </BoxInput>

              <BoxInput>
                <InputLabel htmlFor="password">Senha</InputLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <img src="eye-pass.png" alt="" width={26} height={26} />
                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
              </BoxInput>
              <Button onClick={handleLogin}>Entrar</Button>
            </Form>
          </BoxFormContent>
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
