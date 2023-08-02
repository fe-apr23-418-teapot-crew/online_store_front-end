export const getCartItemsFromLocalStorage = () => {
  const existingCartItems = localStorage.getItem('cartItems');
  const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

  return cartItems;
};
