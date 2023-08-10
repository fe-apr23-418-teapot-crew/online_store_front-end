import { User } from '../../types/User';

export const getStoredItem = (key: string): User => {
  const existingItem = localStorage.getItem(key);

  const storedItems = existingItem ? JSON.parse(existingItem) : null;

  return storedItems;
};

