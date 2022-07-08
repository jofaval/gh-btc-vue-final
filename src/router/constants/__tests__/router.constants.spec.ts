// Constants
import routerConstants from "../router.constants";
import pathConstants from "../paths.constants";

describe("Router constants", () => {
  it("should check the router constants details are as expected", () => {
    // All the expected details should exist
    const routerDetails = ["APP_TITLE", "DISPLAYABLE", "ROUTES"];
    routerDetails.map((detail) => expect(detail in routerConstants).toBe(true));
  });

  it("checks that the expected visible routes are actually visible", () => {
    const displayable = ["Home", "Author", "Posts", "Contact"];
    displayable.map((route) =>
      expect(
        routerConstants.ROUTES.find(({ name }) => name === route)
      ).not.toBeNull()
    );
  });

  it("checks that all the expected routes exists", () => {
    expect(routerConstants.ROUTES.length).toBe(9);
    const routes = ["Home", "Author", "Posts", "Detail", "Contact", "User"];
    routes.map((route) => {
      const realRoute = routerConstants.ROUTES.find(
        ({ name }) => name === route
      );
      expect(realRoute).not.toBeNull();
      expect(realRoute).toStrictEqual(
        expect.objectContaining({
          name: expect.any(String),
          path: expect.any(String),
          component: expect.any(Function),
        })
      );
      return realRoute;
    });
  });

  it("checks that the last route should always be a redirection to home", () => {
    const lastRoute = routerConstants.ROUTES.at(-1);
    expect(lastRoute).toStrictEqual(
      expect.objectContaining({
        // redirect: expect.any(String),
        redirect: "/home",
        path: "*",
      })
    );
  });

  it("should check the path constants are as expected", () => {
    const paths = [
      "HOME",
      "AUTHOR",
      "POSTS",
      "POST_DETAILS",
      "CONTACT",
      "USER",
    ];
    paths.map((path) => expect(path in pathConstants).toBe(true));
  });
});
