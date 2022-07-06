/**
 * Changes the title of the current view
 * @param title The new title
 * @returns Nothing
 */
export const changeTitle = (title: string): void => {
  if (!title) return;
  document.title = title;
};

/**
 * Retrives a locally stored value
 * @param key The key on the hasmap
 * @returns The value of the key on the hashmap
 */
export const getStorageValue = (key: string): string | null =>
  localStorage.getItem(key);

/**
 * Stores a value locally
 * @param key The key on the hasmap
 * @param value The value on the hasmap
 * @returns Nothing
 */
export const setStorageValue = (key: string, value: string): void =>
  localStorage.setItem(key, value);

export default { changeTitle, getStorageValue, setStorageValue };
