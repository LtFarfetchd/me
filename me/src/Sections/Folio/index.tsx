import React from "react";
import { FolioProps } from "./props";

export const Folio: React.FC<FolioProps> = (props) => {
  return <>{props.children}</>;
};
