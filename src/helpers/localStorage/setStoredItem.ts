import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const setStoredItem = (key: string, newItem: LiteProduct | number) => {
  const storedItems = getStoredItems(key);
  const updatedItems = [...storedItems, newItem];

  localStorage.setItem(key, JSON.stringify(updatedItems));
};
