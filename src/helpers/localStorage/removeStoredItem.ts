import { LiteProduct } from '../../types/LiteProduct';
import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const removeStoredItem = (
  items: string,
  productId: number,
  currentItems?: Product[] | undefined,
) => {
  if (items === 'cart') {
    const updatedItems = currentItems?.filter(
      (product: Product) => product.id !== productId,
    );

    localStorage.setItem(items, JSON.stringify(updatedItems));

    return updatedItems;
  }
  const storedItems = getStoredItems('favs');

  const updatedItems = storedItems.filter(
    (item: LiteProduct) => item.id !== productId,
  );

  localStorage.setItem(items, JSON.stringify(updatedItems));

  return updatedItems;
};
