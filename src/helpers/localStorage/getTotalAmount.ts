import { LiteProduct } from '../../types/LiteProduct';

export const getTotalAmount = (cartItems: LiteProduct[]) => {
  const totalAmountFromLocalStorage = cartItems
    .reduce((sum, item) => sum + item.price * item.count, 0);

  return  totalAmountFromLocalStorage;
};
