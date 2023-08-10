import { Product } from '../../types/Product';
import { User } from '../../types/User';
import { getStoredItems } from './getStoredItems';

export const setStoredItem = (key: string, newItem: Product | Product[] | User) => {
  const storedItems = getStoredItems(key);
  const updatedItems = [...storedItems, newItem];

  localStorage.setItem(key, JSON.stringify(updatedItems));
};
