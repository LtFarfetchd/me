import {
  Menu,
  Divider,
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

const GradientMenuDivider = styled.div`
  display: flex;
  &::after {
    background-color: white;
    width: ${sizes.borderSize};
    height: 50%;
    content: "";
    border-radius: 100rem;
    align-self: center;
  }
`;

const GradientMenuContainer = styled.div`
  display: inline-flex;
`;

export const GradientMenu: React.FC = (props) => {
  return (
    <Segment inverted>
      <GradientMenuContainer>
        {React.Children.map(props.children, (menuItem, i) =>
          i < React.Children.count(props.children) - 1 ? (
            <>
              {menuItem}
              <GradientMenuDivider />
            </>
          ) : (
            menuItem
          )
        )}
        <ShiftingGradientUnderline targets={props.children} />
      </GradientMenuContainer>
    </Segment>
  );
};

const StyledGradientMenuItem = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  background: ${linearGradientStyle(
    45,
    colors.primaryColor,
    colors.secondaryColor
  )};
  background-clip: text;
  transition: all 0.25s ease-in-out;
  color: white;
  &:hover {
    -webkit-text-fill-color: transparent;
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
