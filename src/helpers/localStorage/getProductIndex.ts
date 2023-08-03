import { Product } from '../../types/Product';
import { getCartItems } from './getCartItems';

export const getCartItemIndex = (productId: number) => {
  const storedCartItems = getCartItems();

  const productIndex = storedCartItems
    .findIndex((item: Product) => item.id === productId);

  return productIndex;
};
