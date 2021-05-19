import {
  getBoundaryRectExtent,
  getRefBoundaryRect,
  getRefCurrent,
  nullishToNumber,
} from "../../Helpers/functions";
import { GradientMenuItemProps } from "./props";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { linearGradientStyle } from "../../Helpers/paletteHelper";
import { colors } from "../../Helpers/palette";
import { sizes } from "../../Helpers/sizes";
import { flow } from "../../../node_modules/fp-ts/function";
import * as Option from "fp-ts/lib/Option";

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

const getBottomExtentOfDomNode = flow(
  getRefCurrent,
  Option.map(getRefBoundaryRect),
  Option.map(getBoundaryRectExtent("bottom")),
  Option.toNullable,
  nullishToNumber(0)
);

const getTopExtentOfDomNode = flow(
  getRefCurrent,
  Option.map(getRefBoundaryRect),
  Option.map(getBoundaryRectExtent("top")),
  Option.toNullable,
  nullishToNumber(0)
);

export const GradientMenu: React.FC = ({ children }) => (
  <GradientMenuContainer>
    {React.Children.map(children, (menuItem, i) => (
      <>
        {menuItem}
        {i < React.Children.count(children) - 1 && <GradientMenuDivider />}
      </>
    ))}
  </GradientMenuContainer>
);

const StyledGradientMenuItem = styled.div`
  display: flex;
  position: relative;
  padding: 0.75rem 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  background: ${linearGradientStyle(
    45,
    colors.primaryColor,
    colors.secondaryColor
  )};
  background-clip: text;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: transparent;
  }
  ::after {
    content: "";
    position: absolute;
    border-radius: 100rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${sizes.borderSize};
    transform: ${(props: GradientMenuItemProps) =>
      props.isActive ? "scale(1)" : "scale(0)"};
    background: ${linearGradientStyle(
      45,
      colors.primaryColor,
      colors.secondaryColor
    )};
    transition: all 0.4s ease-in-out;
  }
`;

export const GradientMenuItem: React.FC<GradientMenuItemProps> = (props) => {
  const { targetNodeRef, containerNodeRef, onClick } = props;
  const [targetNodeTop, setTargetNodeTop] = useState<number>(0);
  const [targetNodeBottom, setTargetNodeBottom] = useState<number>(0);
  const [containerNodeBottom, setContainerNodeBottom] = useState<number>(-1);

  useEffect(() => {
    const captureNodeExtents = () => {
      setTargetNodeTop(getTopExtentOfDomNode(targetNodeRef));
      setTargetNodeBottom(getBottomExtentOfDomNode(targetNodeRef));
      setContainerNodeBottom(getBottomExtentOfDomNode(containerNodeRef));
    };

    window.addEventListener("scroll", captureNodeExtents);
    return () => window.removeEventListener("scroll", captureNodeExtents);
  }, [containerNodeRef, targetNodeRef]);

  console.log(containerNodeBottom, targetNodeTop, targetNodeBottom);
  return (
    <StyledGradientMenuItem
      {...props}
      isActive={
        targetNodeTop <= containerNodeBottom &&
        containerNodeBottom <= targetNodeBottom
      }
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        targetNodeRef.current?.scrollIntoView({ behavior: "smooth" });
        onClick && onClick(event);
      }}
    >
      {props.name}
    </StyledGradientMenuItem>
  );
};
