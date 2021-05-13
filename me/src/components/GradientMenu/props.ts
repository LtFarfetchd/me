import React from "react";

export interface GradientMenuProps {
  targetSectionsComponents: Array<React.RefObject<HTMLDivElement>>;
}

export interface GradientMenuItemProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  name: string;
  isActive?: boolean;
  targetComponent?: React.RefObject<HTMLDivElement>;
}

export interface ShiftingGradientUnderlineProps {
  targets: React.ReactNode;
}

export interface WrappedGradientMenuItemProps {
  isActive: boolean;
  children: React.ReactNode;
}
