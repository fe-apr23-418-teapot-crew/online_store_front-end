export const getStoredItems = (data?: string) => {
  const existingItems =
    data === 'cart'
      ? localStorage.getItem('cartItems')
      : localStorage.getItem('favsItems');

  const storedItems = existingItems ? JSON.parse(existingItems) : [];

  return storedItems;
};
