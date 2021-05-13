import { movingNodeInsideStaticNode } from "../../Helpers/functions";
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

export const GradientMenu: React.FC<GradientMenuProps> = ({
  children,
  containerComponent,
  targetSectionsComponents,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const captureScrollY = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", captureScrollY);
    return () => window.removeEventListener("scroll", captureScrollY);
  }, [scrollY]);

  const getActiveMenuItem = (
    menuItem: ReactNode,
    targetComponent: React.RefObject<HTMLDivElement>,
    containerBeyondTarget: (target: React.RefObject<HTMLDivElement>) => boolean
  ) => {
    return React.cloneElement(menuItem as ReactElement, {
      isActive: containerBeyondTarget(targetComponent),
      targetComponent: targetComponent,
    });
  };

  const containerBeyondTarget = movingNodeInsideStaticNode(containerComponent);

  return (
    <GradientMenuContainer>
      {React.Children.map(children, (menuItem, i) =>
        i < React.Children.count(children) - 1 ? (
          <>
            {getActiveMenuItem(
              menuItem,
              targetSectionsComponents[i],
              containerBeyondTarget
            )}
            <GradientMenuDivider />
          </>
        ) : (
          getActiveMenuItem(
            menuItem,
            targetSectionsComponents[i],
            containerBeyondTarget
          )
        )
      )}
      <ShiftingGradientUnderline targets={children} />
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
