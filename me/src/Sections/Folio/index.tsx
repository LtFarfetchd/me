import React from "react";
import { FolioProps } from "./props";

export const Folio = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<FolioProps>
>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});
