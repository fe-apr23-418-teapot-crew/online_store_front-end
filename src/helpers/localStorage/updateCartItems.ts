import { LiteProduct } from '../../types/LiteProduct';
import { getCartItems } from './getCartItems';

export const updateCartItem = (id: number, newCount: number) => {
  const storedCartItems = getCartItems();
  const itemIndex = storedCartItems
    .findIndex((item: LiteProduct) => item.id === id);

  if (itemIndex !== -1) {
    storedCartItems[itemIndex].count = newCount;
    localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
  }
};