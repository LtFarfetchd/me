import React from "react";
import { BioProps } from "./props";

export const Bio: React.FC<BioProps> = (props) => {
  return <>{props.children}</>;
};
