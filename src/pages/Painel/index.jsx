// Components
import { MenuComponent } from "../../components/Menu";
import { SvgImageComponents } from "../../components/Image";
import { HeaderComponent } from "../../components/Header";
import { EventsComponent } from "../../components/Events";

// Image Svg
import { ReactComponent as Logo } from "../../assets/logo.svg";

// Styles
import { Layout, Menu, BoxImage, Container } from "./styled";

export const Painel = () => {
  return (
    <Layout>
      <Menu>
        <BoxImage>
          <SvgImageComponents svg={Logo} />
        </BoxImage>

        <MenuComponent />
      </Menu>

      <Container>
        <HeaderComponent />

        <EventsComponent />
      </Container>
    </Layout>
  );
};
