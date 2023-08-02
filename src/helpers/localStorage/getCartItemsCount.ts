export const getCartItemsCount = () => {
  const existingCartItemsCount = localStorage.getItem('cartItemsCount');
  const cartItemsCount = existingCartItemsCount
    ? JSON.parse(existingCartItemsCount)
    : [];

  return cartItemsCount;
};
