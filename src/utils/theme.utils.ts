// Constants
import themeConstants from "@/constants/theme.constants";
// Utilities
import { getStorageValue } from "./browser.utils";

/**
 * Evaluate the user's theme preference
 * @param theme The theme to evaluate, dark by default
 * @returns If the user prefers theme
 */
export const doesUserPreferTheme = (theme = "dark"): boolean =>
  !!window.matchMedia &&
  window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;

/**
 * Retrieves the user's preferred theme
 * @returns The preferred theme by the user
 */
export const getPreferredTheme = (): string => {
  const storedPreference = getStorageValue("preferred-theme");
  return storedPreference || (doesUserPreferTheme("dark") ? "dark" : "light");
};

/**
 * Returns the reversed/opposite theme
 * @param theme The current theme
 * @returns The opposite theme
 */
export const reverseTheme = (theme: string): string =>
  theme === themeConstants.THEMES.DARK
    ? themeConstants.THEMES.LIGHT
    : themeConstants.THEMES.DARK;

export default { doesUserPreferTheme, getPreferredTheme, reverseTheme };
