import { Menu, MenuItemProps, Segment } from "semantic-ui-react";
import { GradientMenuProps } from "./props";
import React, { useState } from "react";
import styled from "styled-components";

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
  &:hover {
    background: blue !important;
  }
  ${(props: MenuItemProps) => props.active ? `` : ``}
`;
