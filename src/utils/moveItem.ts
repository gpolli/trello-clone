export const moveItem = <T>(array: T[], from: number, to: number) => {
  // Get the item and delete it from the current position
  const item = array.splice(from, 1)[0];
  // Show in a better way the behaviour of splice with negative startIndex
  const startIndex = to < 0 ? array.length + to : to;
  // Insert the item in the new position
  array.splice(startIndex, 0, item);

  return array;
}