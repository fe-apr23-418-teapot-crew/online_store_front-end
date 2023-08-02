export const getCartItems = () => {
  const existingCartItems = localStorage.getItem('cartItems');
  const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

  return cartItems;
};
