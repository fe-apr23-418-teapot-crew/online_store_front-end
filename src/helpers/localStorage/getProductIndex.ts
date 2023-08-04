import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const getCartItemIndex = (productId: number) => {
  const storedCartItems = getStoredItems('cart');

  const productIndex = storedCartItems.findIndex(
    (item: Product) => item.id === productId,
  );

  return productIndex;
};
