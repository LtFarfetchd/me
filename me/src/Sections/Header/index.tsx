import React from "react";
import { HeaderProps } from "./props";

export const Header: React.FC<HeaderProps> = (props) => {
  return <>{props.children}</>;
};
