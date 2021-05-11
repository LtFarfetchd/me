import { ButtonProps } from "semantic-ui-react";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";

export interface GradientButtonProps extends ButtonProps {
  gradientBorderSize: `${sizes}`;
  gradientColorOne: `${colors}`;
  gradientColorTwo: `${colors}`;
  buttonColor: `${colors}`;
  unhoveredTextColor: `${colors}`;
  hoveredTextColor: `${colors}`;
}
