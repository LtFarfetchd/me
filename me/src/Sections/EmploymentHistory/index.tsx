import React from "react";
import { EmploymentHistoryProps } from "./props";

export const EmploymentHistory = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<EmploymentHistoryProps>
>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});
