// Styles
import {
  Container,
  Nav,
  BoxTitle,
  Title,
  List,
  ListItem,
  Separator,
} from "./styled";

// Components
import { SvgImageComponents } from "../Image";
import { UserComponent } from "../User";

// Icons Svg
import { ReactComponent as Dash } from "../../assets/icons/dash.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Teams } from "../../assets/icons/teams.svg";
import { ReactComponent as Sub } from "../../assets/icons/subscription.svg";

export const MenuComponent = () => {
  return (
    <Container>
      <Nav>
        <BoxTitle>
          <Title>Menu</Title>
        </BoxTitle>
        <List>
          <ListItem>
            <SvgImageComponents svg={Dash} width={16} height={16} />
            Dashboard
          </ListItem>
          <ListItem $active>
            <SvgImageComponents svg={Calendar} width={16} height={16} />
            Eventos
          </ListItem>
          <ListItem>
            <SvgImageComponents svg={Teams} width={16} height={16} />
            Equipes
          </ListItem>
          <ListItem>
            <SvgImageComponents svg={Sub} width={16} height={16} />
            Inscrições
          </ListItem>
        </List>
      </Nav>

      <Separator />

      <UserComponent />
    </Container>
  );
};
