// Components
import { SvgImageComponents } from "../../components/Image";
import { FormComponent } from "../../components/Form";

// Styles
import {
  Container,
  BoxLogin,
  BoxForm,
  BoxImage,
  BoxBgImage,
  Title,
  BoxFormContent,
} from "./styled";

// Image Svg
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LoginImage } from "../../assets/login.svg";

export const Login = () => {
  return (
    <Container>
      <BoxLogin>
        <BoxForm>
          <BoxFormContent>
            <SvgImageComponents svg={Logo} />
            <Title>
              Bem-Vindo de volta{" "}
              <span>Entre com sua conta para acessar o painel</span>
            </Title>

            <FormComponent />
          </BoxFormContent>
        </BoxForm>

        <BoxImage>
          <BoxBgImage>
            <SvgImageComponents svg={LoginImage} />
          </BoxBgImage>
        </BoxImage>
      </BoxLogin>
    </Container>
  );
};
