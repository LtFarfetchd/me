export const movingNodeInsideStaticNode = (
  staticNode: React.RefObject<HTMLDivElement>
) => (movingNode: React.RefObject<HTMLDivElement>) => {
  const movingNodeTop = movingNode.current?.offsetTop;
  const movingNodeHeight = movingNode.current?.offsetHeight;
  const staticNodeTop = staticNode.current?.offsetTop;
  const staticNodeHeight = staticNode.current?.offsetHeight;
  console.log(movingNode, staticNode);
  if (movingNodeTop && movingNodeHeight && staticNodeTop && staticNodeHeight) {
    console.log(movingNodeTop);
    const staticNodeBottom = staticNodeTop + staticNodeHeight;
    const movingNodeBottom = movingNodeTop + movingNodeHeight;
    return (
      staticNodeTop < movingNodeBottom && movingNodeBottom < staticNodeBottom
    );
  }
  return false;
};
