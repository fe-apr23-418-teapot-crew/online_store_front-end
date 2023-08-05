import { APIResponse } from '../../types/APIResponse';
import { LocalStorageData } from '../../types/LocalStorageData';
//import { Product } from '../../types/Product';
import { getStoredItems } from './getStoredItems';

export const getFilteredItems = (
  items: string,
  data: APIResponse | undefined,
) => {
  const storedItems = getStoredItems(items);
  const storedItemsIds = storedItems.map((item: LocalStorageData) => item.id);

  const itemsFromServer = data?.rows;

  const filteredItems = itemsFromServer
    ?.filter((productFromServer) =>
      storedItemsIds.includes(productFromServer.id),
    )
    .map((productFromServer) => {
      const storedItem = storedItems.find(
        (item: LocalStorageData) => item.id === productFromServer.id,
      );

      const count = storedItem ? storedItem.count : 0;

      return { ...productFromServer, count };
    });

  return filteredItems;
};
