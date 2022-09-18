export function useLocalStorage<T>(storageKey: string): {
  readItems: () => T[];
  writeItem: (item: T) => void;
} {
  const readItems = () => {
    const rawItems = localStorage.getItem(storageKey);
    if (rawItems === null) {
      return [];
    }
    try {
      const items = JSON.parse(rawItems) as T[];
      return items;
    } catch (e) {
      return [];
    }
  };

  const writeItem = (item: T) => {
    const previousItems = readItems();
    const insertedItems = [...previousItems, item];
    localStorage.setItem(storageKey, JSON.stringify(insertedItems));
  };

  return { readItems, writeItem };
}
