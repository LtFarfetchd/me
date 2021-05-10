import { Button } from "semantic-ui-react";
import { GradientButtonProps, GradientButtonBorderProps } from "./props";
import React from "react";
import styled from "styled-components";
import { colors } from "../../Helpers/palette";
import { linearGradientStyle } from "../../Helpers/paletteHelper";

const GradientButtonBorder = styled.div`
  background: ${(props: GradientButtonBorderProps) =>
    linearGradientStyle(45, colors.primaryBlue, colors.primaryOrange)};
  display: inline-block;
  padding: ${(props: GradientButtonBorderProps) => props.borderSize};
  border-radius: 100rem;
`;

export const GradientButton = (props: GradientButtonProps) => {
  const borderProps = props as GradientButtonBorderProps;
  const buttonProps = props as GradientButtonProps;
  return (
    <GradientButtonBorder {...borderProps}>
      <Button {...buttonProps}>{props.children}</Button>
    </GradientButtonBorder>
  );
};
