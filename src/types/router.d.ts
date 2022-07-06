export type RouterType = {
  /** The name of the route */
  name: string;
  /** The target path */
  path: string;
  /** The component it will load */
  component?: Element;
  /** The route it will redirect to */
  redirect?: string;
  /** The meta values, such as the title of the document */
  meta?: { title?: string };
};
