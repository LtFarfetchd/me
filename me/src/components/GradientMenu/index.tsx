import { Menu, MenuItem, MenuItemProps, Segment } from "semantic-ui-react";
import { GradientMenuProps, WrappedGradientMenuItemProps } from "./props";
import React, { useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";

const StyledGradientMenuItem = styled(Menu.Item)`
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

const GradientMenuItemWrapper = styled.div`
  background: ${() =>
    linearGradientStyle(45, colors.primaryColor, colors.secondaryColor)};
  border-radius: 100rem;
  padding: -${() => sizes.borderSize};
  display: inline-flex;
`;

const WrappedGradientMenuItem = ({
  isActive,
  children,
}: WrappedGradientMenuItemProps) => {
  return isActive ? (
    <GradientMenuItemWrapper>{children}</GradientMenuItemWrapper>
  ) : (
    <>{children}</>
  );
};

export const GradientMenuItem = (props: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <WrappedGradientMenuItem isActive={(props.active && !isHovered) || false}>
      <StyledGradientMenuItem
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {props.children}
      </StyledGradientMenuItem>
    </WrappedGradientMenuItem>
  );
};
