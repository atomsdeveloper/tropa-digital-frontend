// Styles
import { Pages, PagesContent, BoxButtonPages, BoxPageValue } from "./styled";

// Components
import { Button } from "../Button";

export const PageEventsComponent = () => {
  return (
    <Pages>
      <PagesContent>
        <BoxButtonPages>
          <Button width={"299px"} height={"40px"}>
            Anterior
          </Button>
        </BoxButtonPages>

        <BoxPageValue $bg>
          <span>1</span>
        </BoxPageValue>
        <BoxPageValue>
          <span>2</span>
        </BoxPageValue>
        <BoxPageValue>
          <span>3</span>
        </BoxPageValue>

        <BoxButtonPages $bg>
          <Button width={"299px"} height={"40px"} />
          Próxima
        </BoxButtonPages>
      </PagesContent>
    </Pages>
  );
};
