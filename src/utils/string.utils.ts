/**
 * Will uppercase the first character of a string, the rest will be untouched
 * @param text The text to be capitalized
 * @returns The text capitalized
 */
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Removes unwanted characters from a string
 * @param text The text to sanitized
 * @returns The sanitized text
 */
export const sanitize = (text: string): string => {
  let cleaned: string = text;
  cleaned = cleaned.replaceAll("'", "");
  cleaned = cleaned.replaceAll('"', "");

  return cleaned;
};

type CompareType = {
  first: string;
  second: string;
  caseSensitive?: boolean;
  contains?: boolean;
};

/**
 * Compares two strings to see if they have a match
 * @param options The configuration values of the comparison
 * @returns If the two strings have a match
 */
export const compare = ({
  first,
  second,
  caseSensitive = false,
  contains = true,
}: CompareType): boolean => {
  let parsedFirst: string = first;
  let parsedSecond: string = second;

  // Wether is case sensitive or not
  if (!caseSensitive) {
    parsedFirst = parsedFirst.toLowerCase();
    parsedSecond = parsedSecond.toLowerCase();
  }

  // If it's included as a substring, one way or the other
  if (contains) {
    return (
      parsedFirst.includes(parsedSecond) || parsedSecond.includes(parsedFirst)
    );
  }

  return parsedFirst === parsedSecond;
};

export default { capitalize, sanitize, compare };
