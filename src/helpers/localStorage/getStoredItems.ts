export const getStoredItems = (data: string) => {
  const existingItems = localStorage.getItem(data);

  const storedItems = existingItems ? JSON.parse(existingItems) : [];

  return storedItems;
};
