import { Menu, MenuItemProps, Segment } from "semantic-ui-react";
import { GradientMenuProps } from "./props";
import React, { useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";

export const GradientMenu = (props: GradientMenuProps) => {
  return (
    <Segment inverted>
      <Menu inverted secondary {...props}>
        {props.children}
      </Menu>
    </Segment>
  );
};

export const GradientMenuItem = styled(Menu.Item)`
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
  ${(props: MenuItemProps) => (props.active ? `` : ``)}
`;
