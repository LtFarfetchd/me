import React from "react";
import { MenuProps } from "semantic-ui-react";

export interface GradientMenuProps extends MenuProps {}

export interface ShiftingGradientUnderlineProps {
  targets: React.ReactNode;
}

export interface WrappedGradientMenuItemProps {
  isActive: boolean;
  children: React.ReactNode;
}
