// Constants
import themeConstants from "@/constants/theme.constants";
// Utilities
import { setStorageValue } from "@/utils/browser.utils";

type ThemeStateType = {
  theme: string;
};

const revereTheme = (theme: string): string =>
  theme === themeConstants.THEMES.DARK
    ? themeConstants.THEMES.LIGHT
    : themeConstants.THEMES.DARK;

export default {
  state: {
    theme: themeConstants.DEFAULT_THEME,
  },
  getters: {
    theme: (state: ThemeStateType) => (): string => state.theme,
    oppositeTheme: (state: ThemeStateType) => (): string =>
      revereTheme(state.theme),
  },
  mutations: {
    updateTheme(state: ThemeStateType, theme: string) {
      state.theme = theme;
      setStorageValue("preferred-theme", theme);
    },
  },
  actions: {
    toggleTheme({
      state,
      commit,
    }: {
      state: ThemeStateType;
      commit: CallableFunction;
    }) {
      const theme = revereTheme(state.theme);
      commit("updateTheme", theme);
    },
  },
  modules: {},
};
