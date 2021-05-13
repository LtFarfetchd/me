import React from "react";
import { Segment } from "semantic-ui-react";
import { HeaderProps } from "./props";

export const Header: React.FC<HeaderProps> = (props) => {
  return <Segment inverted>{props.children}</Segment>;
};
