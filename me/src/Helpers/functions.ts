export const movingNodeInsideStaticNode = (
  movingNode: React.RefObject<HTMLDivElement>
) => (staticNode: React.RefObject<HTMLDivElement>) => {
  const movingNodeBottom =
    movingNode.current?.getBoundingClientRect().bottom ?? 0;
  const staticNodeTop = staticNode.current?.getBoundingClientRect().top ?? 0;
  const staticNodeBottom =
    staticNode.current?.getBoundingClientRect().bottom ?? 0;

  return (
    staticNodeTop < movingNodeBottom && movingNodeBottom < staticNodeBottom
  );
};
