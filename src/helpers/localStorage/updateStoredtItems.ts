import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const updateStoredItems = (id: number, newCount: number) => {
  const storedCartItems = getStoredItems('cart');
  const itemIndex = storedCartItems.findIndex(
    (item: LiteProduct) => item.id === id,
  );

  if (itemIndex !== -1) {
    storedCartItems[itemIndex].count = newCount;
    localStorage.setItem('cart', JSON.stringify(storedCartItems));
  }
};
