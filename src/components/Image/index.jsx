import PropTypes from "prop-types";

export const SvgImageComponents = ({
  svg: Svg,
  width = 161,
  height = 25,
  paddingRight,
  ...props
}) => (
  <>
    {Svg ? (
      <Svg
        width={width}
        height={height}
        style={{
          paddingRight: paddingRight,
        }}
        {...props}
      />
    ) : null}
  </>
);

SvgImageComponents.propTypes = {
  svg: PropTypes.elementType.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};
