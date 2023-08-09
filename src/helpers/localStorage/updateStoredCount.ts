import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const updateStoredCount = (
  key: string,
  id: number,
  newCount: number,
) => {
  const storedCartItems = getStoredItems(key);
  const itemIndex = storedCartItems.findIndex(
    (item: Product) => item.id === id,
  );

  if (itemIndex !== -1) {
    storedCartItems[itemIndex].count = newCount;
    localStorage.setItem(key, JSON.stringify(storedCartItems));
  }
};
