export const SvgImageComponents = ({
  svg: Svg,
  width = 161,
  height = 25,
  ...props
}) => (
  <div>{Svg ? <Svg width={width} height={height} {...props} /> : null}</div>
);
