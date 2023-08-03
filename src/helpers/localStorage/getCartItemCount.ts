import { LiteProduct } from '../../types/LiteProduct';
import { getCartItems } from './getCartItems';

export const getCartItemCount = (itemId: number) => {
  const storedCartItems = getCartItems();
  const storedCartItemCount: number =
    storedCartItems.find((item: LiteProduct) => item.id === itemId)?.count|| 1;

  return storedCartItemCount;
};
