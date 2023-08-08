import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const getStoredItemCount = (key: string, itemId: number) => {
  const storedItems = getStoredItems(key);
  const storedItemCount: number =
    storedItems.find((item: LiteProduct) => item.id === itemId)?.count || 1;

  return storedItemCount;
};
