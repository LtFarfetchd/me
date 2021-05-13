import React from "react";
import { BioProps } from "./props";

export const Bio = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<BioProps>
>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});
