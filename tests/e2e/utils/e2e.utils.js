const interceptPosts = () => {
  cy.intercept(
    {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/",
    },
    fetch("https://jsonplaceholder.typicode.com/posts/")
  ).as("getPosts");
};

const interceptUsers = () => {
  cy.intercept(
    {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/",
    },
    fetch("https://jsonplaceholder.typicode.com/users/")
  ).as("getUsers");
};

const interceptRequests = () => {
  interceptPosts();
  interceptUsers();
};

export { interceptRequests, interceptPosts, interceptUsers };
