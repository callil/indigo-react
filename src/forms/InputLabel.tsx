import styled from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose
} from "styled-system";

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {};

const InputLabel = styled.label<Props>`
  width: 100%;
  display: block;
  pointer-events: none;
  user-select: none;
  ${compose(color, layout, space, typography)}
`;

InputLabel.defaultProps = {
  lineHeight: "short",
  fontSize: 2,
  margin: 0,
  fontWeight: 400,
  color: "black"
};

export default InputLabel;
