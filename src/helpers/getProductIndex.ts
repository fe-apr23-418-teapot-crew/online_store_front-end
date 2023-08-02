import { Product } from '../types/Product';
import { getCartItemsFromLocalStorage } from './getCartItemsFromLocalStorage';

export const getProductIndex = (productId: number) => {
  const cartItems = getCartItemsFromLocalStorage();

  const productIndex = cartItems.findIndex(
    (item: Product) => item.id === productId,
  );

  return productIndex;
};
