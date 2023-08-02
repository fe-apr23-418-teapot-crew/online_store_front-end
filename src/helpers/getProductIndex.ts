import { Product } from '../types/Product';
import { getCartItems } from './localStorage/getCartItems';

export const getProductIndex = (productId: number) => {
  const cartItems = getCartItems();

  const productIndex = cartItems.findIndex(
    (item: Product) => item.id === productId,
  );

  return productIndex;
};
