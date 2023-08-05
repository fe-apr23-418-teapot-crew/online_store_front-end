import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const getItemsIds = (items: string) => {
  const storedItemsIds = getStoredItems(items).map(
    (item: LiteProduct) => item.id,
  );

  return storedItemsIds;
};
