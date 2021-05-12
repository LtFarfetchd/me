// TODO: add a clicked state to button, hide border from screenreaders

import {
  GradientButtonBorderProps,
  GradientButtonButtonProps,
  GradientButtonProps,
} from "./props";
import React, { useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";
import { sizes } from "../../Helpers/sizes";

const GradientButtonBorder = styled.div`
  background: ${(props: GradientButtonBorderProps) =>
    linearGradientStyle(45, props.gradientColorOne, props.gradientColorTwo)};
  display: inline-block;
  padding: ${(props: GradientButtonBorderProps) => props.gradientBorderSize};
  border-radius: 100rem;
  cursor: pointer;
`;

const StyledButton = styled.button`
  border-radius: 100rem;
  border: none;
  padding: ${`${sizes.buttonVerticalPadding} ${sizes.buttonHorizontalPadding}`};
  ${(props: GradientButtonButtonProps & { isHovered: boolean }) =>
    props.isHovered
      ? `background: transparent none; color: ${props.unhoveredTextColor};`
      : `background: ${props.buttonColor}; color: ${props.hoveredTextColor};`}
`;

export const GradientButton: React.FC<GradientButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderProps = props as GradientButtonBorderProps;
  const buttonProps = props as GradientButtonButtonProps;

  return (
    <GradientButtonBorder
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}
      {...borderProps}
    >
      <StyledButton
        {...{ ...buttonProps, isHovered }}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          props.onClick && props.onClick(event);
        }}
      >
        {props.children}
      </StyledButton>
    </GradientButtonBorder>
  );
};
