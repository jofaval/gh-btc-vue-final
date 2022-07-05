// Utilities
import { setStorageValue } from "@/utils/browser.utils";
import { getPreferredTheme, reverseTheme } from "@/utils/theme.utils";

export type ThemeStateType = {
  theme: string;
};

export const getters = {
  theme: (state: ThemeStateType) => (): string => state.theme,
  oppositeTheme: (state: ThemeStateType) => (): string =>
    reverseTheme(state.theme),
};

export const mutations = {
  updateTheme(state: ThemeStateType, theme: string) {
    state.theme = theme;
    setStorageValue("preferred-theme", theme);
  },
};

export const actions = {
  toggleTheme({
    state,
    commit,
  }: {
    state: ThemeStateType;
    commit: CallableFunction;
  }) {
    const theme = reverseTheme(state.theme);
    commit("updateTheme", theme);
  },
};

export default {
  state: {
    theme: getPreferredTheme(),
  },
  getters,
  mutations,
  actions,
  modules: {},
};
