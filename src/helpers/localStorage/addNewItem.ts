import { User } from '../../types/User';

export const addNewItem = (key: string, newItem: User) => {
  localStorage.setItem(key, JSON.stringify(newItem));
};
