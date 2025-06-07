import { Header, Title, SubTitle } from "./styled";

export const HeaderComponent = () => {
  const user = JSON.parse(localStorage.getItem("auth_user") || "{}");
  const name = user.name || "Usuário";

  return (
    <Header>
      <Title>
        Bem vindo de volta, <span>{name}</span>
      </Title>
      <SubTitle>Todos os eventos</SubTitle>
    </Header>
  );
};
