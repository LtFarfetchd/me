import { Button } from "semantic-ui-react";
import { GradientButtonProps } from "./props";
import React from "react";

export const GradientButton = (props: GradientButtonProps) => {
  const { children, ...rest } = props;
  return <Button>{children}</Button>;
};
