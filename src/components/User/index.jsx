// Images SVG
import { ReactComponent as Avatar } from "../../assets/avatar.svg";

// Icons SVG
import { ReactComponent as UserLogged } from "../../assets/icons/user.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

// Component
import { SvgImageComponents } from "../Image";

// Styles
import { Container, Content, BoxImage, Text, Button } from "./styled";

export const UserComponent = () => {
  const user = JSON.parse(localStorage.getItem("auth_user") || "{}");
  const name = user.name || "Usuário";
  const role = user.role || "reader";

  return (
    <Container>
      <Content>
        <BoxImage>
          <SvgImageComponents svg={Avatar} width={40} height={40} />
        </BoxImage>

        <Text>
          <span>{name}</span>
          {role === "admin" ? (
            <span style={{ color: "#a3a3a3" }}>Administrador</span>
          ) : (
            <span style={{ color: "#a3a3a3" }}>Leitor</span>
          )}
        </Text>
      </Content>

      <Button>
        <SvgImageComponents svg={UserLogged} width={16} height={16} />
        <span>Alterar dados</span>
      </Button>

      <Button>
        <SvgImageComponents svg={Logout} width={16} height={16} />
        <span>Sair</span>
      </Button>
    </Container>
  );
};
