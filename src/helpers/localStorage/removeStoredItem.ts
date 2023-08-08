import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const removeStoredItem = (key: string, productId: number) => {
  const storedItems = getStoredItems(key);

  const updatedItems = (storedItems || []).filter(
    (product: Product) => product.id !== productId,
  );

  localStorage.setItem(key, JSON.stringify(updatedItems));

  return updatedItems;
};
