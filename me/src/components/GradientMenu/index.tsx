import { Segment } from "semantic-ui-react";
import {
  GradientMenuItemProps,
  GradientMenuProps,
  ShiftingGradientUnderlineProps,
} from "./props";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
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

export const GradientMenu: React.FC<GradientMenuProps> = (props) => {
  const scrollPositionPastElementTop = (
    nodeRef: React.RefObject<HTMLDivElement>
  ) => {
    const nodeTop = nodeRef.current?.offsetTop;
    const nodeHeight = nodeRef.current?.offsetHeight;

    return nodeTop && nodeHeight
      ? nodeTop < scrollY && scrollY < nodeTop + nodeHeight
      : false;
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const captureScrollY = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", captureScrollY);
    return () => window.removeEventListener("scroll", captureScrollY);
  }, [scrollY]);

  const getActiveMenuItem = (
    menuItem: ReactNode,
    targetComponent: React.RefObject<HTMLDivElement>
  ) =>
    React.cloneElement(menuItem as ReactElement, {
      isActive: scrollPositionPastElementTop(targetComponent),
      targetComponent: targetComponent,
    });

  return (
    <GradientMenuContainer>
      {React.Children.map(props.children, (menuItem, i) =>
        i < React.Children.count(props.children) - 1 ? (
          <>
            {getActiveMenuItem(menuItem, props.targetSectionsComponents[i])}
            <GradientMenuDivider />
          </>
        ) : (
          getActiveMenuItem(menuItem, props.targetSectionsComponents[i])
        )
      )}
      <ShiftingGradientUnderline targets={props.children} />
    </GradientMenuContainer>
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
  color: ${(props: GradientMenuItemProps) =>
    props.isActive ? "red" : "white"};
  &:hover {
    color: transparent;
  }
`;

export const GradientMenuItem: React.FC<GradientMenuItemProps> = (props) => {
  return (
    <StyledGradientMenuItem
      {...props}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        props.targetComponent?.current?.scrollIntoView();
        props.onClick && props.onClick(event);
      }}
    >
      {props.name}
    </StyledGradientMenuItem>
  );
};
