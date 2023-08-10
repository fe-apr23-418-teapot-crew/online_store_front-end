import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const setStoredItem = (key: string, newItem: Product | Product[]) => {
  const storedItems = getStoredItems(key);
  const updatedItems = [...storedItems, newItem];

  localStorage.setItem(key, JSON.stringify(updatedItems));
};
