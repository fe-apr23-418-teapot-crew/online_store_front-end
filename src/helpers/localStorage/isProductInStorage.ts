import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const isProductInStorage = (key: string, productId: number) => {
  const storedItems = getStoredItems(key);

  const productIndex = storedItems.findIndex((item: LiteProduct) => {
    return item.id === productId;
  });

  return productIndex !== -1;
};
