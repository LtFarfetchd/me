import {
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  Segment,
} from "semantic-ui-react";
import {
  GradientMenuProps,
  WrappedGradientMenuItemProps,
  ShiftingGradientUnderlineProps,
} from "./props";
import React, { useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";

const ShiftingGradientUnderline = styled.span`
  ${(props: ShiftingGradientUnderlineProps) => "background: none;"}
`;

export const GradientMenu = (props: MenuProps) => {
  return (
    <Segment inverted>
      <Menu inverted secondary {...props}>
        {props.children}
        <ShiftingGradientUnderline targets={props.children} />
      </Menu>
    </Segment>
  );
};

const StyledGradientMenuItem = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  cursor: pointer;
  &:hover::after {
    content: "";
    position: absolute;
    border-radius: 100rem;
    left: 0;
    bottom: 0;
    height: ${sizes.borderSize};
    width: 100%;
    background: ${linearGradientStyle(
      45,
      colors.primaryColor,
      colors.secondaryColor
    )};
  }
`;

export const GradientMenuItem = (props: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledGradientMenuItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {props.name}
    </StyledGradientMenuItem>
  );
};
