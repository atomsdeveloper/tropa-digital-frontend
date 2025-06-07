// Styles
import {
  Container,
  BoxContent,
  Content,
  Header,
  HeaderContent,
  BoxInput,
  BoxButton,
} from "./styled";

// Component
import { Input } from "../Input";
import { Button } from "../Button";
import { SvgImageComponents } from "../Image";
import { TableEventComponent } from "../TableEvents";
import { PageEventsComponent } from "../PagesEvents";

// Images SVG
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";

export const EventsComponent = () => {
  return (
    <Container>
      <BoxContent>
        <Content>
          <Header>
            <HeaderContent>
              <BoxInput>
                <SvgImageComponents svg={Search} width={16} height={16} />
                <Input
                  type="text"
                  placeholder="Buscar eventos"
                  name="search"
                  width={"147px"}
                  height={"15px"}
                />
              </BoxInput>

              <BoxButton>
                <SvgImageComponents svg={More} width={16} height={16} />
                <Button width={"124px"} height={"34px"}>
                  Inserir novo
                </Button>
              </BoxButton>
            </HeaderContent>
          </Header>

          <TableEventComponent />

          <PageEventsComponent />
        </Content>
      </BoxContent>
    </Container>
  );
};
