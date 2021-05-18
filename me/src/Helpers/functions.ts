import * as Option from "fp-ts/lib/Option";

export const getRefCurrent = (node: React.RefObject<HTMLElement>) =>
  node.current ? Option.some(node.current) : Option.none;

export const getRefBoundaryRect = (domNode: HTMLElement) =>
  domNode.getBoundingClientRect();

export const getBoundaryRectExtent =
  (direction: "top" | "bottom" | "left" | "right") => (domRect: DOMRect) =>
    direction === "top"
      ? domRect.top
      : direction === "bottom"
      ? domRect.bottom
      : direction === "left"
      ? domRect.left
      : domRect.right;
