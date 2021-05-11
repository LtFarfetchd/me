import { Button, ButtonProps } from "semantic-ui-react";
import { GradientButtonProps } from "./props";
import React, { useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";

const GradientButtonBorder = styled.div`
  background: ${(props: GradientButtonProps) =>
    linearGradientStyle(45, props.gradientColorOne, props.gradientColorTwo)};
  display: inline-block;
  padding: ${(props: GradientButtonProps) => props.gradientBorderSize};
  border-radius: 100rem;
  cursor: pointer;
`;

const StyledSemanticButton = styled(Button)`
  ${(props: GradientButtonProps) =>
    props.isHovered
      ? `background: transparent none !important; color: ${props.unhoveredTextColor} !important;`
      : `background: ${props.buttonColor} !important; color: ${props.hoveredTextColor} !important;`}
`;

export const GradientButton = (props: GradientButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GradientButtonBorder
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}
      {...props}
    >
      <StyledSemanticButton
        {...{ ...props, isHovered }}
        onClick={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          data: ButtonProps
        ) => {
          event.stopPropagation();
          props.onClick && props.onClick(event, data);
        }}
      >
        {props.children}
      </StyledSemanticButton>
    </GradientButtonBorder>
  );
};
