// Styles
import { InputStyled } from "./styled";

// Types
import PropTypes from "prop-types";

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  width,
  height,
  ...rest
}) => (
  <InputStyled
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    style={{
      width: width,
      height: height,
    }}
    {...rest}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
};
