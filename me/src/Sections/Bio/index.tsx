import React from "react";
import { BioProps } from "./props";

export const Bio = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<BioProps>
>((props, ref) => {
  return (
    <div style={{ height: "600px", color: "white" }} ref={ref}>
      {props.children}
    </div>
  );
});
