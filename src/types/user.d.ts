export type UserType = {
  /** The id of the user */
  id: number;
  /** The name of the user */
  name: string;
  /** The username of the user */
  username: string;
  /** The email of the user */
  email: string;
  /** The address of the user */
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  /** The phone of the user */
  phone: string;
  /** The website of the user */
  website: string;
  /** The company of the user */
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
