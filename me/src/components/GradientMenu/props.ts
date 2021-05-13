import React from "react";
import { MenuProps } from "semantic-ui-react";

export interface GradientMenuProps {
  children:
    | Array<React.ReactElement<GradientMenuItemProps>>
    | React.ReactElement<GradientMenuItemProps>;
}

export interface GradientMenuItemProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  name: string;
}

export interface ShiftingGradientUnderlineProps {
  targets: React.ReactNode;
}

export interface WrappedGradientMenuItemProps {
  isActive: boolean;
  children: React.ReactNode;
}
