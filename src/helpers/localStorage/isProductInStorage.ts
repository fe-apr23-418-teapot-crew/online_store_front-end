import { LiteProduct } from '../../types/LiteProduct';
import { getStoredItems } from './getStoredItems';

export const isProductInStorage = (items: string, productId: number) => {
  const storedItems = getStoredItems(items);

  const productIndex = storedItems.findIndex((item: LiteProduct) => {
    return item.id === productId;
  });

  return productIndex !== -1;
};
