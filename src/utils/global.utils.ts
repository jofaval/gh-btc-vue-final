// Constants
import globalConstants from "@/constants/global.constants";

/**
 * Detects if the app is currently on production mode
 * @returns If the app is on production
 */
export const isProduction = (): boolean =>
  process.env.NODE_ENV === globalConstants.ENV.PRODUCTION;

// It's an internal configuration variable
const showOnProduction = false;
/**
 * Debugs a `console.log()` only if the environment is not on production
 * @param args The elements to display
 * @returns nothing
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dLog = (...args: any[]): void => {
  // Don't debug if the app is on production
  if (isProduction() && !showOnProduction) return;

  console.log(...args);
};

export default { dLog, isProduction };
