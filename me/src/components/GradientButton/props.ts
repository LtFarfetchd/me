import React from "react";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";

export interface GradientButtonBorderProps {
  gradientBorderSize: `${sizes}`;
  gradientColorOne: `${colors}`;
  gradientColorTwo: `${colors}`;
}

export interface GradientButtonButtonProps {
  buttonColor: `${colors}`;
  unhoveredTextColor: `${colors}`;
  hoveredTextColor: `${colors}`;
}

export interface GradientButtonProps
  extends GradientButtonBorderProps,
    GradientButtonButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
