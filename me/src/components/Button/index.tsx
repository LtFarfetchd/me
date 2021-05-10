import { Button, ButtonProps } from "semantic-ui-react";
import { GradientButtonProps, GradientButtonBorderProps } from "./props";
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../Helpers/palette";
import { linearGradientStyle } from "../../Helpers/paletteHelper";

const GradientButtonBorder = styled.div`
  background: ${(props: GradientButtonBorderProps) =>
    linearGradientStyle(
      45,
      props.colorOne || colors.primaryColor,
      props.colorTwo || colors.secondaryColor
    )};
  display: inline-block;
  padding: ${(props: GradientButtonBorderProps) => props.borderSize};
  border-radius: 100rem;
  cursor: pointer;
`;

const CustomSemanticButton = styled(Button)`
  ${(props) =>
    props.isHovered
      ? `background: transparent none !important; color: ${colors.generalWhite} !important;`
      : `background: ${colors.generalWhite} !important; color: ${colors.generalBlack} !important;`}
`;

export const GradientButton = (props: GradientButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderProps = props as GradientButtonBorderProps;
  const buttonProps = {
    ...(props as ButtonProps),
    isHovered: isHovered,
  };

  return (
    <GradientButtonBorder
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => buttonProps.onClick}
      {...borderProps}
    >
      <CustomSemanticButton {...buttonProps}>
        {props.children}
      </CustomSemanticButton>
    </GradientButtonBorder>
  );
};
