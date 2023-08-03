export const getCartItems = () => {
  const existingCartItems = localStorage.getItem('cartItems');
  const storedCartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

  return storedCartItems;
};
