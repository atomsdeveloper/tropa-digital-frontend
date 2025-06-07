// React
import { useState } from "react";

// Redirect
import { useNavigate } from "react-router-dom";

// Image Svg
import { ReactComponent as Eye } from "../../assets/eye.svg";

// Components
import { SvgImageComponents } from "../Image/";
import { Input } from "../Input";
import { Button } from "../Button";

// Hooks
import { useUser } from "../../hooks/useUser";

// Styles
import { Form, Container, InputLabel } from "./styled";

export const FormComponent = () => {
  // Context
  const { login } = useUser();

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const res = login(form.email, form.password);
    if (!res.success) {
      setError(res.message);
      console.log(error);
    } else {
      setError("");
      navigate("/painel");
    }
  };

  return (
    <Form>
      <Container>
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <Input
          $bg
          width={"100%"}
          height={"40px"}
          type="email"
          id="email"
          placeholder="seunome@seuservidor.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </Container>

      <Container>
        <InputLabel htmlFor="password">Senha</InputLabel>
        <Input
          $bg
          width={"100%"}
          height={"40px"}
          type="password"
          id="password"
          placeholder="Senha"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <SvgImageComponents svg={Eye} width={25} />
      </Container>

      <Button onClick={handleLogin} width={"100%"} height={"40px"}>
        Entrar
      </Button>
    </Form>
  );
};
