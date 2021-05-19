import React from "react";

export interface GradientMenuItemProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  name: string;
  isActive?: boolean;
  targetNodeRef: React.RefObject<HTMLElement>;
  containerNodeRef: React.RefObject<HTMLElement>;
}
