// Utilities
import { getStorageValue } from "@/utils/browser.utils";

const storedPreference = getStorageValue("preferred-theme");
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = storedPreference || (prefersDarkMode ? "dark" : "light");

export default {
  THEMES: { DARK: "dark", LIGHT: "light" },
  DEFAULT_THEME: theme,
};
