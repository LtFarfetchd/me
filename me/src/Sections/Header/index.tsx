import React from "react";
import { Ref, Segment, Sticky } from "semantic-ui-react";
import { HeaderProps } from "./props";

export const Header = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<HeaderProps>
>((props, ref) => {
  return (
    <Sticky>
      <Ref innerRef={ref}>
        <Segment inverted>{props.children}</Segment>
      </Ref>
    </Sticky>
  );
});
