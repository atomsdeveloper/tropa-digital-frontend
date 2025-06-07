// Styles
import { Pages, PagesContent, BoxButtonPages, BoxPageValue } from "./styled";

// Components
import { Button } from "../Button";

export const PageEventsComponent = () => {
  return (
    <Pages>
      <PagesContent>
        <BoxButtonPages>
          <Button width={"299px"} height={"40px"} colorText={"#252525"}>
            Anterior
          </Button>
        </BoxButtonPages>

        <BoxPageValue>
          <span>1</span>
        </BoxPageValue>
        <BoxPageValue>
          <span>2</span>
        </BoxPageValue>
        <BoxPageValue>
          <span>3</span>
        </BoxPageValue>

        <BoxButtonPages>
          <Button
            width={"299px"}
            height={"40px"}
            bg={"#cc6237"}
            colorText={"#ffff"}
          >
            Próxima
          </Button>
        </BoxButtonPages>
      </PagesContent>
    </Pages>
  );
};
