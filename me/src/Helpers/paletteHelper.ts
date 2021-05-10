import { colors } from "./palette";

export const linearGradientStyle = (
  angle: number,
  colorOne: string,
  colorTwo: string
) => `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
