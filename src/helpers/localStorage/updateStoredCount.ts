import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const updateStoredCount = (
  key: string,
  id: number,
  newCount: number,
) => {
  const storedCartItems = getStoredItems(key);
  const itemIndex = storedCartItems.findIndex(
    (item: LiteProduct) => item.id === id,
  );

  if (itemIndex !== -1) {
    storedCartItems[itemIndex].count = newCount;
    localStorage.setItem(key, JSON.stringify(storedCartItems));
  }
};
