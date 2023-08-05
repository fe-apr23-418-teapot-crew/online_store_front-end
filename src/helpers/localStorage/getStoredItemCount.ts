import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const getStoredItemCount = (itemId: number) => {
  const storedItems = getStoredItems('cart');
  const storedItemCount: number =
    storedItems.find((item: LiteProduct) => item.id === itemId)?.count || 1;

  return storedItemCount;
};
