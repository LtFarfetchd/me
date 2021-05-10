import { ButtonProps } from "semantic-ui-react";

export interface GradientButtonBorderProps {
  borderSize: string;
  colorOne: string;
  colorTwo: string;
}

export interface GradientButtonProps
  extends ButtonProps,
    GradientButtonBorderProps {}
