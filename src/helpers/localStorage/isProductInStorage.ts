import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const isProductInStorage = (key: string, productId: number) => {
  const storedItems = getStoredItems(key);

  const productIndex = storedItems.findIndex((item: Product) => {
    return item.id === productId;
  });

  return productIndex !== -1;
};
