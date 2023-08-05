import { Product } from '../../types/Product';

export const getTotalAmount = (items: Product[]) => {
  const totalAmount = items.reduce((sum: number, item: Product) => {
    const price = item.price ?? 0;
    const count = item.count ?? 0;
    return sum + price * count;
  }, 0);

  return totalAmount;
};
