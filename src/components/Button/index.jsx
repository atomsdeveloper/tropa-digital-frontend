// Styles
import { ButtonStyled } from "./styled";

// Types
import PropTypes from "prop-types";

export const Button = ({
  width,
  height,
  children,
  type = "button",
  onClick,
  className,
  disabled = false,
  ...rest
}) => (
  <ButtonStyled
    type={type}
    onClick={onClick}
    style={{
      width: width,
      height: height,
    }}
    className={className}
    disabled={disabled}
    {...rest}
  >
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
