import {
  getBoundaryRectExtent,
  getRefBoundaryRect,
  getRefCurrent,
} from "../../Helpers/functions";
import {
  GradientMenuItemProps,
  GradientMenuProps,
  ShiftingGradientUnderlineProps,
} from "./props";
import React, { ReactElement, RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";
import { flow } from "../../../node_modules/fp-ts/function";
import * as Option from "fp-ts/lib/Option";

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
  const [menuContainerY, setMenuContainerY] = useState(0);

  const getTopExtentOfDomNode = flow(
    getRefCurrent,
    Option.map(getRefBoundaryRect),
    Option.map(getBoundaryRectExtent("top")),
    Option.toNullable
  );

  const getActiveMenuItem = (
    menuItemToActivate: React.ReactNode,
    menuContainerBottomExtent: number,
    sectionContainer: RefObject<HTMLDivElement>
  ) => {
    const sectionTopExtent = getTopExtentOfDomNode(sectionContainer);
    console.log(menuContainerBottomExtent, sectionTopExtent);
    return React.cloneElement(menuItemToActivate as ReactElement, {
      isActive:
        sectionTopExtent && menuContainerBottomExtent > sectionTopExtent,
      targetComponent: sectionContainer,
    });
  };

  useEffect(() => {
    const getBottomExtentOfDomNode = flow(
      getRefCurrent,
      Option.map(getRefBoundaryRect),
      Option.map(getBoundaryRectExtent("bottom")),
      Option.toNullable
    );
    const captureMenuContainerY = () =>
      setMenuContainerY(getBottomExtentOfDomNode(containerComponent) ?? 0);
    window.addEventListener("scroll", captureMenuContainerY);
    return () => window.removeEventListener("scroll", captureMenuContainerY);
  }, [menuContainerY, containerComponent]);

  return (
    <GradientMenuContainer>
      {React.Children.map(children, (menuItem, i) =>
        i < React.Children.count(children) - 1 ? (
          <>
            {getActiveMenuItem(
              menuItem,
              menuContainerY,
              targetSectionsComponents[i]
            )}
            <GradientMenuDivider />
          </>
        ) : (
          getActiveMenuItem(
            menuItem,
            menuContainerY,
            targetSectionsComponents[i]
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
