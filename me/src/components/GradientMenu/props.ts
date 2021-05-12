import { MenuProps } from "semantic-ui-react";

export interface GradientMenuProps extends MenuProps {}
export interface WrappedGradientMenuItemProps {
  isActive: boolean;
  children: React.ReactNode;
}
