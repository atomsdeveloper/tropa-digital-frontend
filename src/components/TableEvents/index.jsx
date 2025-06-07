// Images SVG
import { ReactComponent as Actions } from "../../assets/icons/actions.svg";

// Components
import { SvgImageComponents } from "../Image";

// Styles
import { Table, TrHead, Th, TrBody, Td } from "./styled";

export const TableEventComponent = () => {
  return (
    <Table>
      <thead>
        <TrHead>
          <Th>Nome do evento</Th>
          <Th>Total de equipes</Th>
          <Th>Status</Th>
          <Th>Data</Th>
          <Th></Th>
        </TrHead>
      </thead>
      <tbody>
        <TrBody>
          <Td>Hackathon 2025</Td>
          <Td>12</Td>
          <Td>
            <span></span> Ativo
          </Td>
          <Td>06/06/2025</Td>
          <Td>
            <SvgImageComponents svg={Actions} width={3} height={17} />
          </Td>
        </TrBody>
        <TrBody>
          <Td>Hackathon 2025</Td>
          <Td>12</Td>
          <Td>
            <span></span> Ativo
          </Td>
          <Td>06/06/2025</Td>
          <Td>
            <SvgImageComponents svg={Actions} width={3} height={17} />
          </Td>
        </TrBody>
      </tbody>
    </Table>
  );
};
