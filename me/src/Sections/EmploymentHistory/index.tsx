import React from "react";
import { EmploymentHistoryProps } from "./props";

export const EmploymentHistory = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<EmploymentHistoryProps>
>((props, ref) => {
  return (
    <div style={{ height: "600px", color: "white" }} ref={ref}>
      {props.children}
    </div>
  );
});
