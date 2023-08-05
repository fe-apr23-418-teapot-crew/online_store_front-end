import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const setStoredItem = (items: string, newItem: LiteProduct | number) => {
  const updatedItems = getStoredItems(items);

  updatedItems.push(newItem);
  localStorage.setItem(items, JSON.stringify(updatedItems));
};
